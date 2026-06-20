export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ajomait: {
    slug: 'ajomait',
    domain: 'ajomait.com',
    name: 'American Journal of Multidisciplinary AI & Technology',
    shortName: 'AJOMAIT',
    description: 'Multidisciplinary AI and Technology Research',
    dbEnvVar: 'DATABASE_URL_AJOMAIT',
    smtpUserEnvVar: 'SMTP_USER_AJOMAIT',
    smtpPassEnvVar: 'SMTP_PASS_AJOMAIT',
    smtpFromEnvVar: 'SMTP_FROM_AJOMAIT',
    r2BucketEnvVar: 'R2_BUCKET_AJOMAIT',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_AJOMAIT',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_AJOMAIT',
  },
};

const DEV_SITE_SLUG = 'ajomait';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
