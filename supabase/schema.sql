create extension if not exists pgcrypto;

create table if not exists public.ot_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  applicant_name text not null check (char_length(applicant_name) between 2 and 30),
  phone text not null check (phone ~ '^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$'),
  trainer text not null check (char_length(trainer) between 2 and 30),
  goal text not null check (char_length(goal) between 2 and 50),
  preferred_time text not null check (char_length(preferred_time) between 2 and 300),
  status text not null default 'new' check (status in ('new', 'contacted', 'complete')),
  privacy_agreed_at timestamptz not null default now()
);

alter table public.ot_applications enable row level security;
grant insert on public.ot_applications to anon;
grant select, update on public.ot_applications to authenticated;

do $$ begin
  create policy "public can submit ot application" on public.ot_applications
  for insert to anon with check (status = 'new');
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "only designated admin can read" on public.ot_applications
  for select to authenticated
  using ((auth.jwt() ->> 'email') = 'junh1415@naver.com');
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "only designated admin can update" on public.ot_applications
  for update to authenticated
  using ((auth.jwt() ->> 'email') = 'junh1415@naver.com')
  with check ((auth.jwt() ->> 'email') = 'junh1415@naver.com');
exception when duplicate_object then null; end $$;
