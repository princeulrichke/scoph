import { Suspense } from 'react';
import { About, Mission, CoreValues, Affiliations, CTA } from "@/components";

export default function Page() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <About />
            <Mission />
            <CoreValues />
            <Affiliations />
            <CTA />
        </Suspense>
    );
}
