export default function Compartments() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">GLUT4 Translocation Compartments</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">Compartments sheet of GLUT4 Translocation</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/1CaEu-VDq4aiIIvyaY5_QB9xeR5Rqk0bO/edit?gid=1852271927#gid=1852271927"></iframe>
            </div>
        </div>
    );
}
