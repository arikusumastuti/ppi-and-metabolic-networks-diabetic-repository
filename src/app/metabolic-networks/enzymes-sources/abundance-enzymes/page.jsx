export default function AbundanceEnzymes() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">Abundance Enzymes</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">We generated this catalog via computational strategy by combining the T2DM GWAS Catalog and Gene Info so called Abundance Enzymes file formatted in excel</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1--AHZErVnpLk30-vjOGm3TLzwtCwHchQ/edit?gid=680861908#gid=680861908"></iframe>
            </div>
        </div>
    );
}
