const style = {
    height: '100%',
    width: '100%',
};


export default function Self() {


    return (
        <div
            className="bg-transparentContainer h-[125px] xxs:h-[150px] lg:h-[300px]"
            style={{
                aspectRatio: '0.833',
                border: '4px outset rgba(0,0,0,0.3)',
            }}
        >
            {/* {pic} */}
            <img src="/images/Self_Autumn.png" style={style} />
        </div>
    );
}
