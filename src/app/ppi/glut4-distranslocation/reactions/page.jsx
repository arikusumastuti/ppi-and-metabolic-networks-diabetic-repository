export default function Reactions() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">GLUT4 Distranslocation Reactions</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">Reactions sheet of GLUT4 Distranslocation</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1U-viEhFxcSdzxMldMziLTMFfa4EtMwaX/edit?gid=171080900#gid=171080900"></iframe>
            </div>
        </div>
    );
}
