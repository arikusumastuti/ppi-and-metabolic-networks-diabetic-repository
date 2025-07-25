export default function Proteins() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-8 py-16">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">Synthesis Protein (mTOR Based) Proteins</h3>
                <p className="w-full mt-3.5 mx-auto font-medium">Proteins sheet of Synthesis Protein (mTOR Based)</p>
            </div>
            <div className="w-full h-screen p-5 rounded-2xl shadow-2xl bg-white">
                <iframe className="w-full h-full" allowFullScreen seamless loading="lazy" src="https://docs.google.com/spreadsheets/d/10SlacVKvlx-QPipCTBJ6MTX6FuG5f5qr/edit?gid=1801876875#gid=1801876875"></iframe>
            </div>
        </div>
    );
}
