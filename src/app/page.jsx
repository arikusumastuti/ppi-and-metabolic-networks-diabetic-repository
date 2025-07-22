export default function Overview() {
    return (
        <div className="flex flex-col items-center justify-center px-8 py-16">
            <div className="text-center mb-7">
                <h3 className="mt-3.5 text-3xl font-bold text-blue-500">Overview</h3>
                <p className="xl:w-full mt-3.5 mx-auto font-medium">Model of Protein-Protein Interactions (PPI) and Metabolic Networks formatted in system of biological markup language.</p>
            </div>
            <div className="xl:w-3/4 space-y-4 text-justify bg-white p-8 rounded-2xl shadow-xl">
                <section>
                    <h2 className="font-bold">Protein-Protein Interactions (PPI) Model</h2>
                    <p>Protein-protein Interactions (PPI) consist of modelling mathematics formatted in system biological markup language that involving:</p>
                    <ol className="list-decimal list-inside ps-4">
                        <li>Model for GLUT4 Translocation</li>
                        <li>Model for GLUT4 Distranslocation</li>
                        <li>Model for Synthesis Protein (AMPK based)</li>
                        <li>Model for Synthesis Protein (mTOR based)</li>
                    </ol>
                </section>
                <section>
                    <h2 className="font-bold">Metabolic Networks Model</h2>
                    <p>Metabolic Networks consist of modelling mathematics (based on GTEx patient data along side T2DM & Liver tissue) formatted in system biological markup language that involving:</p>
                    <ol className="list-decimal list-inside ps-4">
                        <li>Model for Type 2 Diabetic Mellitus (T2DM)</li>
                        <li>Model for Liver</li>
                    </ol>
                </section>
                <section>
                    <h2 className="font-bold">Enzymes Sources for Metabolic Networks</h2>
                    <p>This section describes a several database involved in revealing the T2DM metabolites and enzymes including:</p>
                    <ol className="list-decimal list-inside ps-4">
                        <li>T2DM GWAS Catalog</li>
                        <li>Gene Info (GTEx based): We computationally extracted all T2DM genes list from GTEx patient data so called Gene Info file formatted in excel</li>
                        <li>Abundance Enzymes: We generated this catalog via computational strategy by combining the T2DM GWAS Catalog and Gene Info so called Abundance Enzymes file formatted in excel</li>
                    </ol>
                </section>
            </div>
        </div>
    );
}
