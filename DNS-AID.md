# DNS for AI Discovery (DNS-AID) on Vercel

To configure DNS-based agent discovery (DNS-AID) for `ta.sd` using Vercel, you need to publish `HTTPS` (SVCB) records pointing to your domain.

Below are the exact records and two ways to add them: using the **Vercel Dashboard** or the **Vercel CLI**.

---

## DNS Records to Add

### 1. Agent-to-Agent discovery record
- **Name/Subdomain**: `_a2a._agents`
- **Type**: `HTTPS`
- **Value**: `1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port`
- **TTL**: `3600` (or default)

### 2. Index / Entrypoint discovery record
- **Name/Subdomain**: `_index._agents`
- **Type**: `HTTPS`
- **Value**: `1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port`
- **TTL**: `3600` (or default)

---

## Method 1: Using the Vercel Dashboard

1. Log in to your **Vercel Dashboard**.
2. Go to **Domains** under your account/team settings.
3. Click on the domain **ta.sd**.
4. In the **DNS Records** section:
   - For the first record:
     - **Name**: `_a2a._agents`
     - **Type**: Select `HTTPS` from the dropdown.
     - **Value**: `1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port`
     - Click **Add**.
   - For the second record:
     - **Name**: `_index._agents`
     - **Type**: Select `HTTPS` from the dropdown.
     - **Value**: `1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port`
     - Click **Add**.

---

## Method 2: Using the Vercel CLI

If you have the Vercel CLI installed and configured, you can add these records by running the following commands in your terminal:

```bash
# Add _a2a._agents record
vercel dns add ta.sd _a2a._agents HTTPS '1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port'

# Add _index._agents record
vercel dns add ta.sd _index._agents HTTPS '1 ta.sd. alpn="a2a" port=443 mandatory=alpn,port'
```

---

## DNSSEC Signing (Important)

The DNS-AID protocol requires your DNS discovery zone to be signed with **DNSSEC** so that resolvers can return authenticated data.
- Vercel automatically signs all domains managed by Vercel Nameservers with **DNSSEC** by default. No additional setup is required if your domain uses Vercel's nameservers.
