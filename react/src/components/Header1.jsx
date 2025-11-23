export default function Header1 () {
    const header1 = [
        {online:"Book Online service 24/7",
            details:
            [    {Offer:"Offer"},
                {help:"Help Center"},
                {download:"Download App"},
            ]
        }
    ]

    return (
        <div className="header1 flex bg-orange-400 mt-[3px]">
            <div className="flex w-full justify-start mt-2px">
                <p>{header1[0].online}</p>
            </div>
           <div className="flex  w-full gap-4 justify-end
">
                {header1[0].details.map((item,index) => (
                    <button key={index}>{Object.values(item)[0]}
                    </button>
                ))}
            </div>
        </div>
    )

}