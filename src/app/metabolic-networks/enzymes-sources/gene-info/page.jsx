export default function GeneInfo() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">Gene Info (GTEX Based)</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">We computationally extracted all T2DM genes list from GTEx patient data so called Gene Info file formatted in excel</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1SRruIsQAao6LZwRXFm5o9mty3rcM7qgU/edit?gid=234750614#gid=234750614"></iframe>
            </div>
        </div>
    );
}
