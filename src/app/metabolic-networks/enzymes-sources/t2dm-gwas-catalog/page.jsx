export default function GWASCatalog() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">T2DM GWAS Catalog</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">This catalog describes a type of diabetes due to being less responsive to insulin influenced by both genes and the environment</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1TEn-R9STnE9METMNQ4jStoZYl4ak7R_JCy5E3LVP3QI/edit?gid=1313419318#gid=1313419318"></iframe>
            </div>
        </div>
    );
}
