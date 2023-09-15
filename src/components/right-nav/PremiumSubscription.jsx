function PremiumSubscription() {
    return (
        <div className="flex justify-center items-center ">
            <div className="  w-[330px] h-44 rounded-3xl mt-8 mb-4 flex flex-col gap-2 justify-center p-3 bg-[#F7F9F9]">
                <h2 className="font-bold text-xl">Premium'a Abone Ol</h2>
                <p className="font-bold text-sm">
                    Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
                </p>
                <button className="bg-gray-800 text-white font-bold rounded-full w-24 h-10 text-sm">
                    Abone Ol
                </button>
            </div>
        </div>
    );
}

export default PremiumSubscription;
