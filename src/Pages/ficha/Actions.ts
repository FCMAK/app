import { SDate } from "servisofts-component";
import SSocket from "servisofts-socket";
import Config from "../../Config";

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
                    med.turnos = turnos.filter(t => !!t).filter(tur => tur.CodMed == med.CodMed);
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
export const getMedicoSinTurno = ({ nrosuc, codesp = "999", codmed }) => {
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
            // this.setState({ medicos: medicos })
            resolve(md);
        }).catch(e => {
            reject(e)
            console.error(e)
        })
    })
}


export const getTurnos = ({ nrosuc, codmed, fecha = new SDate().toString("yyyy-MM-dd") }) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "turno",
            type: "getAll",
            nrosuc: nrosuc,
            codmed: codmed,
            fectur: new SDate(fecha, 'yyyy-MM-dd').toString("yyyy-MM-ddThh:mm:ss")
        }).then((resp: any) => {
            const turnos = resp.data ?? [];
            resolve(turnos);
        }).catch(e => {
            reject(e)
        })
    })
}



export const getAllMedicos = ({ nrosuc, fecha, codesp = "999" }) => {
    return new Promise((resolve, reject) => {
        SSocket.sendPromise({
            component: "medico",
            type: "getAll",
            estado: "cargando",
            nrosuc: nrosuc,
            codesp: codesp,
        }).then(async (e: any) => {
            if (!e.data) return;
            const medicos = await buildTurnos({ medicos: e.data, nrosuc: nrosuc, fecha: fecha });
            resolve(medicos);
        }).catch(e => {
            reject(e)
            console.error(e)
        })
    })
}

const buildTurnos = async (p: { medicos: any, nrosuc: any, fecha: any }) => {
    const cdias = Config.rango_dias;

    // Crear arreglo de promesas
    const promesas = Array.from({ length: cdias }, (_, i) => {
        const fecha = new SDate(p.fecha, "yyyy-MM-dd").addDay(i);
        return SSocket.sendPromise({
            component: "turno",
            type: "getAll",
            nrosuc: p.nrosuc,
            fectur: fecha.toString("yyyy-MM-ddThh:mm:ss")
        });
    });
    const respuestas = await Promise.all(promesas);
    // Unir todos los turnos
    const turnosFinal = respuestas.flatMap((resp:any) => resp?.data ?? []);
    p.medicos.map(med => {
        med.turnos = turnosFinal.filter(tur => tur?.CodMed == med?.CodMed);
    })
    p.medicos.sort((a, b) => (a?.turnos ?? []).length < (b.turnos ?? []).length ? 1 : -1)
    // this.setState({ medicos: medicos })
    return p.medicos;
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