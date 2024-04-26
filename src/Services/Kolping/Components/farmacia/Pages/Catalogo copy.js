import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SForm, SInput } from 'servisofts-component';
import Parent from '../index'
import Icons from 'servisofts-component/img';
import SSocket from 'servisofts-socket'
import categoria_farmacia from '../../categoria_farmacia';
import Item from '../Component/Item';


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    getCategorias({ icon, description, url }) {
        return <>
            <SView height={30} />
            <SView height={28} style={{ maxWidth: '80%', paddingTop: 4, paddingLeft: 12, paddingRight: 12, paddingBottom: 4, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }} center >
                <SView col={"xs-12 md-12 lg-12"} row center  >
                    {!icon ? null : <SView center height  >
                        <SIcon name={icon} height={20} width={22} />
                    </SView>}
                    <SView flex center height style={{
                        paddingTop: 2
                    }}>
                        <SText fontSize={14} color={'#999999'} font={"LondonMM"} bold > {description}</SText>
                    </SView>
                </SView>

            </SView>
            <SView width={14} />


        </>
    }

    getProductoTodos() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        //alert(this.key_e)
        return Object.keys(data).map((key) => {
            var obj = data[key];
            return (
                <>
                    <Item obj={obj} />
                    <SView width={18} />

                </>
            )
        })
    }

    getProducto({ img, description, precio }) {

        return <>
            <Item />
            <SView width={18} />
        </>
    }

    getSubTitle({ title, url }) {
        return <>
            <SView col={"xs-12"} height={24} row center  >
                <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                    {/* aqui poner un flex, por si hay o no hay icono */}
                    <SText fontSize={18} font={"LondonMM"} bold >{title}</SText>
                </SView>
                <SView col={"xs-6"} row center style={{ justifyContent: 'flex-end', }}
                    onPress={() => { alert(url) }} >
                    <SText fontSize={12} font={"LondonMM"} center style={{ fontWeight: "bold", }}>
                        Ver todos
                    </SText>
                    <SView width={6} />
                    <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
                </SView>
            </SView>
            <SView height={18} />
        </>
    }
    getProducto({ img, description, precio }) {
        return <>
            <SView width={149} row height={196} style={{ borderRadius: 8, overflow: 'hidden', }} backgroundColor={STheme.color.secondary} border={STheme.color.card}>
                <SView center col={"xs-12"} height={116}  >
                    <SImage src={img} />
                </SView>
                <SView col={"xs-12 "} height={80} style={{ paddingLeft: 18, paddingRight: 18, }} >
                    <SView col={"xs-12"} flex center height={32} row  >
                        <SText col={"xs-12"} fontSize={12} font={"LondonMM"} style={{ alignContent: 'center', paddingTop: 2, justifyContent: 'flex-start' }}>{description}</SText>
                    </SView>
                    <SView flex center height={48}   >
                        <SView col={"xs-12"} height={24} row center  >
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                                <SText fontSize={14} font={"LondonMM"} bold >Bs. {precio}</SText>
                            </SView>
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }}
                                onPress={() => { alert(description); }} >
                                <SIcon name={'IconCartTrue'} fill={STheme.color.info} height={24} width={24} />
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SView >
            <SView width={18} />
        </>
    }

    getProductoFavorito({ img, description, precio }) {
        return <>
            <SView width={18} />
            <SView width={149} row height={196} style={{ borderRadius: 8, overflow: 'hidden', borderColor: '#F3F4F5', borderWidth: 1, }}>
                <SView center col={"xs-12"} height={116} style={{ backgroundColor: '#F0F3F6' }}  >
                    <SImage src={img} />
                </SView>

                <SView col={"xs-12 "} height={80} style={{ paddingLeft: 18, paddingRight: 18, backgroundColor: 'white' }} >
                    <SView col={"xs-12"} flex center height={32} row  >
                        <SText col={"xs-12"} fontSize={12} font={"LondonMM"} style={{ alignContent: 'center', paddingTop: 2, justifyContent: 'flex-start', color: '#111111' }}>{description}</SText>
                    </SView>
                    <SView flex center height={48}   >
                        <SView col={"xs-12"} height={24} row center  >
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                                <SText fontSize={14} color={'#090F47'} font={"LondonMM"} bold >{precio}</SText>
                            </SView>
                            <SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }}
                                onPress={() => { alert(description); }} >
                                <SIcon name={'IconFavTrue'} height={24} width={24} />
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SView >
        </>
    }

    getForm() {
        return <SInput
            col={"xs-12"}
            color={STheme.color.text}
            placeholder="100.000 medicamentos y prod.."
            style={{
                backgroundColor: STheme.color.card,
                height: 40,
                borderRadius: 8,
                color: '#666666'
            }}
            icon={<SIcon name={"IconSearch"} width={40} height={20} />}
            iconR={<SIcon name={"IconSearchFilter"} width={40} height={20} />} />
    }


    getBotonFlotante({ monto_total, cant_item }) {
        return <>
            <SView center row style={{
                width: 117, height: 54,
                position: "absolute", bottom: 57, right: 0,
            }}
                onPress={() => {
                    this.props.navigation.navigate('farmacia/carrito');
                }}
            >
                <SIcon name={'IconCarritoFlotante'}
                    style={{
                        width: '100%', height: '100%',
                        position: "absolute",
                    }}
                />
                <SView col={"xs-6"} row center style={{ justifyContent: 'flex-end', }}>
                    <SIcon name={'IconCartTrue'} height={29} width={29} fill='white' />
                </SView>
                <SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', paddingLeft: 8 }} >
                    <SText fontSize={12} color={'white'} font={"LondonMM"}   >Bs247.97</SText>
                    <SText fontSize={12} color={'#ffffffbb'} font={"LondonMM"} bold >3 items</SText>
                </SView>
            </SView>
        </>
    }
    getCategoriasList() {
        var categorias = categoria_farmacia.Actions.getAll(this.props);
        if (!categorias) return <SLoad />
        return <SView col={"xs-11 md-8 lg-8 xl-6"} height={60} row  >
            <SScrollView2>
                <SHr />
                <SView center row>
                    {this.getCategorias({ icon: 'IconFilter', description: 'Filtros', url: 'jajaj' })}
                    {Object.keys(categorias).map((key, index) => {
                        var obj = categorias[key];
                        return this.getCategorias({ icon: '', url: 'jajaj', description: obj.descripcion })
                    })}
                </SView>
                <SHr />
            </SScrollView2>
        </SView>
    }
    render() {


        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return (
            <SPage title={'Catalogo'} disableScroll  >
                <SView col={"xs-12 "} center height>
                    <SScrollView2 disableHorizontal={true}>
                        <SView col={"xs-12 "} center >
                            <SView height={20} />
                            <SView col={"xs-11 md-8 lg-8 xl-6"}>
                                {this.getForm()}
                            </SView>
                            <SView height={15} />
                            {this.getCategoriasList()}

                            <SView height={16} />
                            <SView col={"xs-11 md-8 lg-8 xl-6"} height={40}   >
                                {this.getSubTitle({ title: 'COVID-19', url: 'Categoria:COVID-19 Mostrar producto' })}
                            </SView>
                            <SView col={"xs-12 md-8 lg-8 xl-6"} height={220} >
                                <SScrollView2>
                                    <SView center row>
                                        <SView width={18} />
                                        {this.getProductoTodos()}
                                    </SView>
                                    <SHr />
                                </SScrollView2>
                            </SView>

                            <SView height={10} />

                        </SView>
                    </SScrollView2>
                </SView>

                {this.getBotonFlotante({
                    cant_item: 10,
                    monto_total: 2
                })}


            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Catalogo);