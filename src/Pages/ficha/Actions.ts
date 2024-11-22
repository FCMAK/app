import { SDate } from "servisofts-component";
import SSocket from "servisofts-socket";

export const getMedico = ({ nrosuc, codesp = "999", codmed, fecha = new SDate().toString("yyyy-MM-dd") }) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "medico",
            type: "getAll",
            estado: "cargando",
            nrosuc: nrosuc,
            codesp: codesp,
        }).then((e: any) => {
            if (!e.data) return;
            const medicos = e.data;
            const md = medicos.find(a => a.CodMed == codmed)
            SSocket.sendPromise({
                component: "turno",
                type: "getAll",
                nrosuc: nrosuc,
                codmed: codmed,
                fectur: new SDate(fecha, 'yyyy-MM-dd').toString("yyyy-MM-ddThh:mm:ss")
            }).then((resp: any) => {
                const turnos = resp.data ?? [];
                medicos.map(med => {
                    med.turnos = turnos.filter(tur => tur.CodMed == med.CodMed);
                })
                medicos.sort((a, b) => a.turnos.length < b.turnos.length ? 1 : -1)
                // this.setState({ medicos: medicos })
                resolve(md);
            }).catch(e => {
                reject(e)
            })
        }).catch(e => {
            reject(e)
            console.error(e)
        })
    })
}

export const getAllMedicos = ({ nrosuc, fecha, codesp="999" }) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "medico",
            type: "getAll",
            estado: "cargando",
            nrosuc: nrosuc,
            codesp: codesp,
        }).then((e: any) => {
            if (!e.data) return;
            const medicos = e.data;
            SSocket.sendPromise({
                component: "turno",
                type: "getAll",
                nrosuc: nrosuc,
                fectur: new SDate(fecha, 'yyyy-MM-dd').toString("yyyy-MM-ddThh:mm:ss")
            }).then((resp: any) => {
                const turnos = resp.data ?? [];
                medicos.map(med => {
                    med.turnos = turnos.filter(tur => tur.CodMed == med.CodMed);
                })
                medicos.sort((a, b) => a.turnos.length < b.turnos.length ? 1 : -1)
                // this.setState({ medicos: medicos })
                resolve(medicos);
            }).catch(e => {
                reject(e)
            })
        }).catch(e => {
            reject(e)
            console.error(e)
        })
    })
}
export const getAllServicios = ({ nrosuc, codesp = "999", codmed = "999" }) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "servicio_kolping",
            type: "getAll",
            // nrosuc: "0",
            // CodEsp: "999",
            // CodMed: "999",
            nrosuc: nrosuc,
            CodEsp: codesp,
            CodMed: codmed
        }).then((e: any) => {
            e.data.sort((a, b) => {
                const isConsultaA = a.NomPro.includes("CONSULTA") || a.NomPro.includes("RE-CONSULTA");
                const isConsultaB = b.NomPro.includes("CONSULTA") || b.NomPro.includes("RE-CONSULTA");

                return isConsultaB - isConsultaA;
            });
            resolve(e.data);
        }).catch(e => {
            reject(e);
        })
    })

}

export const getAllHistorico = (key_usuario) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getAll",
            key_usuario
        }).then((e: any) => {
            resolve(e.data);
        }).catch(e => {
            reject(e);
        })
    })

}
export const getActivas = (key_usuario) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "orden_compra",
            type: "getActivas",
            key_usuario
        }).then((e: any) => {
            if (!e.data) return reject(e);
            resolve(e.data);
        }).catch(e => {
            reject(e);
        })
    })

}