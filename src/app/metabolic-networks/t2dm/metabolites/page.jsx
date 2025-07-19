export default function Metabolites() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">T2DM Metabolites</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">Metabolites sheet of T2DM Model</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1TbrWbT3TtmsYbygJ6Dlsdza36zvhL_l6/edit?gid=952481655#gid=952481655"></iframe>
            </div>
        </div>
    );
}
