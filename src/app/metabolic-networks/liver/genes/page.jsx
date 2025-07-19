export default function Genes() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">Liver Genes</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">Genes sheet of Liver Model</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/10FLtcV0n4R44-opn6FrRj62QMeqOgsji/edit?gid=573417451#gid=573417451"></iframe>
            </div>
        </div>
    );
}
