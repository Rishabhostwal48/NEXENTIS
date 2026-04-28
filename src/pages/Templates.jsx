import DashboardLayout from "../components/layout/DashboardLayout";
import { Card, CardTitle, CardDescription } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import TexturedBackground from "../components/ui/TexturedBackground";

function TemplateCard({ title, subtitle, children, tags = [] }) {
  return (
    <Card className="p-0 overflow-hidden hover-lift hover:shadow-soft-lg transition-all duration-normal">
      <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <CardTitle className="mb-1">{title}</CardTitle>
          <CardDescription className="text-sm">{subtitle}</CardDescription>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary" size="sm">
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <Button variant="outline" size="sm">
          Use
        </Button>
      </div>
      <div className="p-5">{children}</div>
    </Card>
  );
}

function DashboardMock() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-500/15 border border-brand-500/20" />
          <div>
            <div className="h-3 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-2 h-2 w-20 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-24 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-10 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>

      <div className="col-span-12 md:col-span-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-4">
        <div className="h-2 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 h-6 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-2 w-32 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
      </div>
      <div className="col-span-12 md:col-span-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-4">
        <div className="h-2 w-24 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 h-6 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-2 w-24 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
      </div>
      <div className="col-span-12 md:col-span-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-4">
        <div className="h-2 w-16 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 h-6 w-20 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-2 h-2 w-28 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
      </div>

      <div className="col-span-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-24 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-neutral-200/70 dark:bg-neutral-800/70" />
          ))}
        </div>
      </div>
    </div>
  );
}

function LoginMock() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-5">
        <div className="h-3 w-36 rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-4 space-y-3">
          <div className="h-10 rounded-md bg-white/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800" />
          <div className="h-10 rounded-md bg-white/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800" />
          <div className="h-10 rounded-md bg-brand-gradient opacity-90" />
          <div className="h-2 w-44 rounded bg-neutral-200 dark:bg-neutral-800 mx-auto" />
        </div>
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient-soft opacity-70" />
        <div className="relative">
          <div className="h-2 w-32 rounded bg-white/70 dark:bg-neutral-900/60" />
          <div className="mt-3 h-2 w-48 rounded bg-white/60 dark:bg-neutral-900/50" />
          <div className="mt-6 h-28 rounded-xl bg-white/60 dark:bg-neutral-900/40 border border-white/30 dark:border-neutral-800/70" />
        </div>
      </div>
    </div>
  );
}

function EcommerceMock() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-20 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-28 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-8 w-24 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="h-8 w-28 rounded-md bg-neutral-200 dark:bg-neutral-800" />
      </div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="col-span-6 md:col-span-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 p-4"
        >
          <div className="aspect-[4/3] rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-3 h-2 w-28 rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="mt-2 h-2 w-20 rounded bg-neutral-200/80 dark:bg-neutral-800/80" />
          <div className="mt-3 h-9 rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
      ))}
    </div>
  );
}

export default function Templates() {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 lg:p-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Templates
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Real layouts that look like product UI. These are starter patterns, not screenshots.
          </p>
        </div>

        <div className="space-y-6">
          <TemplateCard
            title="Dashboard"
            subtitle="KPI cards, grid-based content, and a clean top bar"
            tags={["SaaS", "Analytics", "Layout"]}
          >
            <TexturedBackground variant="grid" intensity="light" className="rounded-xl p-4">
              <DashboardMock />
            </TexturedBackground>
          </TemplateCard>

          <TemplateCard
            title="Login"
            subtitle="Conversion-friendly auth layout with brand glow"
            tags={["Auth", "Marketing", "Glass"]}
          >
            <LoginMock />
          </TemplateCard>

          <TemplateCard
            title="E-commerce"
            subtitle="Product grid with quick add patterns"
            tags={["Commerce", "Catalog", "Cards"]}
          >
            <EcommerceMock />
          </TemplateCard>
        </div>
      </div>
    </DashboardLayout>
  );
}

