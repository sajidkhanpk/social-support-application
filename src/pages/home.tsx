// import SupportApplicationForm from "@/feature/support-application/support-application-form.component";
import { FormFieldsSkeleton } from "@/feature/support-application/components/application-skeleton/application-skeleton.component";
import { Card } from "@/shared/components/molecules/card";
import { lazy, Suspense } from "react";

const SupportApplicationForm = lazy(() => import("../feature/support-application/support-application-form.component"));

function Home() {
  return (
    <Card className="w-[min(45rem,90svw)]">
      <Suspense fallback={<FormFieldsSkeleton />}>
        <SupportApplicationForm />
      </Suspense>
    </Card>
  );
}

export default Home;
