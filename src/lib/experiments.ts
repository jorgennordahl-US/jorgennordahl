export type Experiment = {
  slug: string
  title: string
  description: string
  status: 'active' | 'wip' | 'completed'
  tags: string[]
  featured: boolean
  date: string
}

export const experiments: Experiment[] = [
  {
    slug: 'mcp-dynamics-365',
    title: 'MCP for Dynamics 365 FO',
    description: 'Exposing ERP functions to AI agents through Model Context Protocol.',
    status: 'active',
    tags: ['mcp', 'erp', 'ai-agents'],
    featured: true,
    date: '2025-06',
  },
  {
    slug: 'agentic-erp',
    title: 'Agentic ERP',
    description: 'Can AI agents handle period closing and variance analysis without manual coordination?',
    status: 'wip',
    tags: ['agents', 'erp', 'automation'],
    featured: true,
    date: '2025-05',
  },
  {
    slug: 'dataverse-ai-foundation',
    title: 'Dataverse as AI Foundation',
    description: 'Why a canonical data model matters more than the AI model itself.',
    status: 'active',
    tags: ['dataverse', 'data', 'architecture'],
    featured: true,
    date: '2025-04',
  },
  {
    slug: 'copilot-studio',
    title: 'Copilot Studio in Production',
    description: 'Practical experience building agents in production environments.',
    status: 'wip',
    tags: ['copilot', 'power-platform', 'agents'],
    featured: true,
    date: '2025-03',
  },
]
