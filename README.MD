- Para el google login agrege la app en firebase configure el firebase y 
- luego agrege un Id de cliente OAuth 2.0 https://console.cloud.google.com/apis/credentials?authuser=0&hl=es&project=kolping-67170








prueba de pusheo


```sql
select
	orden_compra.key,
	orden_compra.key_usuario,
	orden_compra.fecha_on,
	orden_compra.estado,
	orden_compra.estado_pago,
	orden_compra.codpac,
	orden_compra.voucher,
 	orden_compra.qrid,
	orden_compra.nit,
	orden_compra.razon_social,
	orden_compra.email_factura,
	orden_compra.nro_ord,
	orden_compra.confirmacion->>'NroGrl' as NroGrl,
	orden_compra.data


from orden_compra
where orden_compra.estado_pago = 'pagado'
order by orden_compra.fecha_on desc
limit 10000
```