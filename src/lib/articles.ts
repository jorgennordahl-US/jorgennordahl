export type Article = {
  slug: string
  title: string
  date: string
  tag: string
  excerpt: string
}

// Static article list — replace with MDX file reader as content grows
export async function getArticles(): Promise<Article[]> {
  return [
    {
      slug: 'incentive-based-business-models-vested-partnership',
      title: 'Business models for incentive-based compensation',
      date: 'jun 2026',
      tag: 'business-model',
      excerpt: 'How vested partnerships and incentive-based compensation can create stronger alignment between vendor and client.',
    },
    {
      slug: 'risk-sharing-contracts-incentive-partnerships',
      title: 'Contracts for risk-sharing and incentive-based partnerships',
      date: 'jun 2026',
      tag: 'contracts',
      excerpt: 'Which contract models support real risk-sharing between partners — and how to structure incentives that last.',
    },
    {
      slug: 'from-erp-to-autonomous-agents',
      title: 'From ERP to autonomous agents',
      date: 'jun 2025',
      tag: 'ai',
      excerpt: 'How modern ERP systems become the backbone for autonomous AI agents — and what that means for organizations that are ready.',
    },
    {
      slug: 'ai-first-operating-model',
      title: 'AI First Operating Model',
      date: 'may 2025',
      tag: 'strategy',
      excerpt: 'What does it actually mean to be AI-first? Not a technology question — an organizational one.',
    },
    {
      slug: 'why-erp-projects-fail-with-ai',
      title: 'Why ERP projects fail with AI',
      date: 'apr 2025',
      tag: 'erp',
      excerpt: 'The most common failure mode is not the technology. It is the assumption that AI can be bolted onto a broken process.',
    },
    {
      slug: 'organizational-culture-as-ai-enabler',
      title: 'Organizational culture as an AI enabler',
      date: 'mar 2025',
      tag: 'culture',
      excerpt: 'Psychological safety, learning loops, and why your culture is the most important AI infrastructure you have.',
    },
  ]
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const articles = await getArticles()
  return articles.find(a => a.slug === slug)
}
