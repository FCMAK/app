import { SInputsCofig, STheme } from 'servisofts-component';
const inputs = (): SInputsCofig => {
    return {
        default: {
            LabelStyle: {
                position: "absolute",
                top: -8,
                left: 0,
                fontSize: 12,
                width: "100%",
                // color: STheme.color.text,
                // backgroundColor:STheme.color.primary+"22",
                // borderRadius:4,
                // padding:4,
                // backgroundColor: "#E0E0E0" + "55",
            },
            View: {
                // borderWidth: 2,
                //  borderColor: "#E0E0E0" + "40",
                height: 40,
                borderRadius: 4,
                marginTop: 30,
                paddingStart: 4,
                // backgroundColor: STheme.color.white,
                backgroundColor: '#E0E0E0' + '35'
                // borderWidth: 1,
                // borderColor: STheme.color.gray,
            },
            InputText: {
                // fontSize: 16,

                paddingStart: 8,
                color: "#000000",
                // backgroundColor: STheme.color.white,
                // backgroundColor: "#E0E0E0" + "55",
                // height: 55,
                // borderRadius: 16,
                // backgroundColor: STheme.color.card,
                // borderRadius: 16,
                // borderWidth: 1,
                // borderColor: STheme.color.gray,
            },
            error: {
                // borderRadius: 16,
                borderWidth: 1,
                borderColor: "#FA8081"
            },
            "placeholder": {
                color: STheme.color.text,
            }
        }
    }
}
export default inputs;
