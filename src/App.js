import './App.css';
import jsPDF, { AcroFormCheckBox, AcroFormTextField } from 'jspdf';
import React from 'react';
import logo from './logo.jpg'

function App() {

  function crear(){
    const pdf = new jsPDF({unit:'px',pageSize:'letter'})
    var width = pdf.internal.pageSize.getWidth()
    //var height = pdf.internal.pageSize.getHeight()
    pdf.setFontSize(14)
    pdf.setLineHeightFactor(2)
    pdf.text('INSPECCIÓN DE LÍNEA',width/2,20,{align:'center'})
    pdf.text('Varela Hermanos, S.A.',width/2,30,{align:'center'})
    pdf.addImage(logo,'JPEG',20,10,30,25)
    pdf.line(20,35,width-20,35)
    pdf.setFontSize(8)
	//informacion de operaciones
    pdf.text('INFORMACIÓN DE OPERACIONES',width/4,50,{align:'center'})
    pdf.rect(20,40,width/2-40,12)
    pdf.text(['Producto:','Fecha de producción:','Presentación:','# de Línea:','Hora de arranque:'],20,60)
    //verificacion del sistema de trasiego
	pdf.text('VERIFICACIÓN DEL SISTEMA DE TRASIEGO',width*3/4,50,{align:'center'})
    pdf.rect(width/2+20,40,width/2-40,12)
    pdf.text(['Línea de trasiego:','Mangueras:','Bombas:','Filtros:'],width/2+20,60,{baseline:'top'})
    //inspeccion de maquinas para el arranque
	pdf.text('INSPECCIÓN DE MÁQUINAS PARA EL ARRANQUE',width/4,130,{align:'center'})
    pdf.rect(20,120,width/2-40,12)
    pdf.text(['Nivel de llenado:','Tapado:','Etiquetado:','Codificado de envase:','Codificado cajas:'],20,140)
    //analisis fisico-quimico
	pdf.text('ANALISIS FISICO-QUIMICO PARA EL ARRANQUE',width*3/4,130,{align:'center'})
    pdf.rect(width/2+20,120,width/2-40,12)
    pdf.text(['Grado Alcohólico Aparente:','Dentro del rango','pH','Prueba Organoléptica:'],width/2+20,140)

    //verificacion del sistema de trasiego
    var lineaTrasiego = new AcroFormCheckBox()
    lineaTrasiego.fieldName = 'Linea de trasiego'
    lineaTrasiego.Rect = [width*3/4,55,8,8]
    pdf.addField(lineaTrasiego)
    var mangueras = new AcroFormCheckBox()
    mangueras.fieldName = 'Mangueras'
    mangueras.Rect = [width*3/4,67,8,8]
    pdf.addField(mangueras)
    var bombas = new AcroFormCheckBox()
    bombas.fieldName = 'Bombas'
    bombas.Rect = [width*3/4,79,8,8]
    pdf.addField(bombas)
    var filtros = new AcroFormCheckBox()
    filtros.fieldName = 'Filtros'
    filtros.Rect = [width*3/4,91,8,8]
    pdf.addField(filtros)
	pdf.text(['OK','OK','OK','OK'],width*3/4-10,62)

    //informacion de operaciones
    var producto = new AcroFormTextField()
    producto.fieldName = 'Producto'
    producto.Rect = [100,55,50,8]
    pdf.addField(producto)
    var fechaProd = new AcroFormTextField()
    fechaProd.fieldName = 'Fecha de Producción'
    fechaProd.Rect = [100,67,50,8]
    pdf.addField(fechaProd)
    var presentacion = new AcroFormTextField()
    presentacion.fieldName = 'Presentación'
    presentacion.Rect = [100,79,50,8]
    pdf.addField(presentacion)
    var numLinea = new AcroFormTextField()
    numLinea.fieldName = 'Numero de Línea'
    numLinea.Rect = [100,91,50,8]
    pdf.addField(numLinea)
    var horaArranque = new AcroFormTextField()
    horaArranque.fieldName = 'Hora de Arranque'
    horaArranque.Rect = [100,103,50,8]
    pdf.addField(horaArranque)

    //inspeccion de maquinas para el arranque
    var nivLlenado = new AcroFormCheckBox()
    nivLlenado.fieldName = 'Nivel de llenado'
    nivLlenado.Rect = [width/4,135,8,8]
    pdf.addField(nivLlenado)
    var tapado = new AcroFormCheckBox()
    tapado.fieldName = 'Tapado'
    tapado.Rect = [width/4,147,8,8]
    pdf.addField(tapado)
    var etiquetado = new AcroFormCheckBox()
    etiquetado.fieldName = 'Etiquetado'
    etiquetado.Rect = [width/4,159,8,8]
    pdf.addField(etiquetado)
    var codificadoEnvase = new AcroFormCheckBox()
    codificadoEnvase.fieldName = 'Condificado de envase'
    codificadoEnvase.Rect = [width/4,171,8,8]
    pdf.addField(codificadoEnvase)
    var codificadoCajas = new AcroFormCheckBox()
    codificadoCajas.fieldName = 'Codificado cajas'
    codificadoCajas.Rect = [width/4,183,8,8]
    pdf.addField(codificadoCajas)
	pdf.text(['OK','OK','OK','OK','OK'],width/4-10,142)

    //analisis fisico-quimico
    var gradoAlcoholico = new AcroFormTextField()
    gradoAlcoholico.fieldName = 'Grado Alcohólico Aparente'
    gradoAlcoholico.Rect = [width*3/4,135,50,8]
    pdf.addField(gradoAlcoholico)
    var dentroRango = new AcroFormCheckBox()
    dentroRango.fieldName = 'Dentro del rango'
    dentroRango.Rect = [width*3/4,147,8,8]
    pdf.addField(dentroRango)
    var ph = new AcroFormTextField()
    ph.fieldName = 'pH'
    ph.Rect = [width*3/4,159,50,8]
    pdf.addField(ph)
    var pruebaOrganoleptica = new AcroFormCheckBox()
    pruebaOrganoleptica.fieldName = 'Prueba Organoléptica'
    pruebaOrganoleptica.Rect = [width*3/4,171,8,8]
    pdf.addField(pruebaOrganoleptica)

    // inf de suministro
    pdf.text('INFORMACIÓN DE SUMINISTRO',width/2,210,{align:'center'})
    pdf.rect(20,200,width-40,12)
    pdf.text('Inspección 1',width*2/8+50,220,{align:'left'})
	pdf.text('Inspección 2',width*3/8+50,220,{align:'left'})
	pdf.text('Inspección 3',width*4/8+50,220,{align:'left'})
	pdf.text('Inspección 4',width*5/8+50,220,{align:'left'})
	pdf.text('Inspección 5',width*6/8+50,220,{align:'left'})

	/***** etiquetas *****/
    pdf.text(['HORA:','Frente:','Recetario:','Cuello:','Hombro:','Ovalo:','Strip:'],30,230)
    var hora1 = new AcroFormTextField()
    hora1.fieldName = 'Hora1'
    hora1.Rect = [width*2/8+40,225,50,8]
    pdf.addField(hora1)
    var hora2 = new AcroFormTextField()
    hora2.fieldName = 'Hora2'
    hora2.Rect = [width*3/8+40,225,50,8]
    pdf.addField(hora2)
    var hora3 = new AcroFormTextField()
    hora3.fieldName = 'Hora3'
    hora3.Rect = [width*4/8+40,225,50,8]
    pdf.addField(hora3)
    var hora4 = new AcroFormTextField()
    hora4.fieldName = 'Hora4'
    hora4.Rect = [width*5/8+40,225,50,8]
    pdf.addField(hora4)
    var hora5 = new AcroFormTextField()
    hora5.fieldName = 'Hora5'
    hora5.Rect = [width*6/8+40,225,50,8]
    pdf.addField(hora5)

	var frente1 = new AcroFormTextField()
    frente1.fieldName = 'Frente1'
    frente1.Rect = [width*2/8+40,237,50,8]
    pdf.addField(frente1)
	var frente2 = new AcroFormTextField()
    frente2.fieldName = 'Frente2'
    frente2.Rect = [width*3/8+40,237,50,8]
    pdf.addField(frente2)
	var frente3 = new AcroFormTextField()
    frente3.fieldName = 'Frente3'
    frente3.Rect = [width*4/8+40,237,50,8]
    pdf.addField(frente3)
	var frente4 = new AcroFormTextField()
    frente4.fieldName = 'Frente4'
    frente4.Rect = [width*5/8+40,237,50,8]
    pdf.addField(frente4)
	var frente5 = new AcroFormTextField()
    frente5.fieldName = 'Frente5'
    frente5.Rect = [width*6/8+40,237,50,8]
    pdf.addField(frente5)

	var recetario1 = new AcroFormTextField()
    recetario1.fieldName = 'Recetario1'
    recetario1.Rect = [width*2/8+40,249,50,8]
    pdf.addField(recetario1)
	var recetario2 = new AcroFormTextField()
    recetario2.fieldName = 'Recetario2'
    recetario2.Rect = [width*3/8+40,249,50,8]
    pdf.addField(recetario2)
	var recetario3 = new AcroFormTextField()
    recetario3.fieldName = 'Recetario3'
    recetario3.Rect = [width*4/8+40,249,50,8]
    pdf.addField(recetario3)
	var recetario4 = new AcroFormTextField()
    recetario4.fieldName = 'Recetario4'
    recetario4.Rect = [width*5/8+40,249,50,8]
    pdf.addField(recetario4)
	var recetario5 = new AcroFormTextField()
    recetario5.fieldName = 'Recetario5'
    recetario5.Rect = [width*6/8+40,249,50,8]
    pdf.addField(recetario5)

	var cuello1 = new AcroFormTextField()
    cuello1.fieldName = 'cuello1'
    cuello1.Rect = [width*2/8+40,261,50,8]
    pdf.addField(cuello1)
	var cuello2 = new AcroFormTextField()
    cuello2.fieldName = 'cuello2'
    cuello2.Rect = [width*3/8+40,261,50,8]
    pdf.addField(cuello2)
	var cuello3 = new AcroFormTextField()
    cuello3.fieldName = 'cuello3'
    cuello3.Rect = [width*4/8+40,261,50,8]
    pdf.addField(cuello3)
	var cuello4 = new AcroFormTextField()
    cuello4.fieldName = 'cuello4'
    cuello4.Rect = [width*5/8+40,261,50,8]
    pdf.addField(cuello4)
	var cuello5 = new AcroFormTextField()
    cuello5.fieldName = 'cuello5'
    cuello5.Rect = [width*6/8+40,261,50,8]
    pdf.addField(cuello5)

	var hombro1 = new AcroFormTextField()
    hombro1.fieldName = 'hombro1'
    hombro1.Rect = [width*2/8+40,273,50,8]
    pdf.addField(hombro1)
	var hombro2 = new AcroFormTextField()
    hombro2.fieldName = 'hombro2'
    hombro2.Rect = [width*3/8+40,273,50,8]
    pdf.addField(hombro2)
	var hombro3 = new AcroFormTextField()
    hombro3.fieldName = 'hombro3'
    hombro3.Rect = [width*4/8+40,273,50,8]
    pdf.addField(hombro3)
	var hombro4 = new AcroFormTextField()
    hombro4.fieldName = 'hombro4'
    hombro4.Rect = [width*5/8+40,273,50,8]
    pdf.addField(hombro4)
	var hombro5 = new AcroFormTextField()
    hombro5.fieldName = 'hombro5'
    hombro5.Rect = [width*6/8+40,273,50,8]
    pdf.addField(hombro5)

	var ovalo1 = new AcroFormTextField()
    ovalo1.fieldName = 'ovalo1'
    ovalo1.Rect = [width*2/8+40,285,50,8]
    pdf.addField(ovalo1)
	var ovalo2 = new AcroFormTextField()
    ovalo2.fieldName = 'ovalo2'
    ovalo2.Rect = [width*3/8+40,285,50,8]
    pdf.addField(ovalo2)
	var ovalo3 = new AcroFormTextField()
    ovalo3.fieldName = 'ovalo3'
    ovalo3.Rect = [width*4/8+40,285,50,8]
    pdf.addField(ovalo3)
	var ovalo4 = new AcroFormTextField()
    ovalo4.fieldName = 'ovalo4'
    ovalo4.Rect = [width*5/8+40,285,50,8]
    pdf.addField(ovalo4)
	var ovalo5 = new AcroFormTextField()
    ovalo5.fieldName = 'ovalo5'
    ovalo5.Rect = [width*6/8+40,285,50,8]
    pdf.addField(ovalo5)

	var strip1 = new AcroFormTextField()
    strip1.fieldName = 'strip1'
    strip1.Rect = [width*2/8+40,297,50,8]
    pdf.addField(strip1)
	var strip2 = new AcroFormTextField()
    strip2.fieldName = 'strip2'
    strip2.Rect = [width*3/8+40,297,50,8]
    pdf.addField(strip2)
	var strip3 = new AcroFormTextField()
    strip3.fieldName = 'strip3'
    strip3.Rect = [width*4/8+40,297,50,8]
    pdf.addField(strip3)
	var strip4 = new AcroFormTextField()
    strip4.fieldName = 'strip4'
    strip4.Rect = [width*5/8+40,297,50,8]
    pdf.addField(strip4)
	var strip5 = new AcroFormTextField()
    strip5.fieldName = 'strip5'
    strip5.Rect = [width*6/8+40,297,50,8]
    pdf.addField(strip5)
    pdf.line(20,310,width-20,310)

	var frente_Autoad = new AcroFormCheckBox()
    frente_Autoad.fieldName = 'frente autoadhesivo'
    frente_Autoad.Rect = [70,237,8,8]
    pdf.addField(frente_Autoad)
	var recetario_Autoad = new AcroFormCheckBox()
    recetario_Autoad.fieldName = 'recetario autoadhesivo'
    recetario_Autoad.Rect = [70,249,8,8]
    pdf.addField(recetario_Autoad)
	var cuello_Autoad = new AcroFormCheckBox()
    cuello_Autoad.fieldName = 'cuello autoadhesivo'
    cuello_Autoad.Rect = [70,261,8,8]
    pdf.addField(cuello_Autoad)
	var hombro_Autoad = new AcroFormCheckBox()
    hombro_Autoad.fieldName = 'hombro autoadhesivo'
    hombro_Autoad.Rect = [70,273,8,8]
    pdf.addField(hombro_Autoad)
	var ovalo_Autoad = new AcroFormCheckBox()
    ovalo_Autoad.fieldName = 'ovalo autoadhesivo'
    ovalo_Autoad.Rect = [70,285,8,8]
    pdf.addField(ovalo_Autoad)
	var strip_Autoad = new AcroFormCheckBox()
    strip_Autoad.fieldName = 'strip autoadhesivo'
    strip_Autoad.Rect = [70,297,8,8]
    pdf.addField(strip_Autoad)

	var frente_ColaFria = new AcroFormCheckBox()
    frente_ColaFria.fieldName = 'frente ColaFria'
    frente_ColaFria.Rect = [100,237,8,8]
    pdf.addField(frente_ColaFria)
	var recetario_ColaFria = new AcroFormCheckBox()
    recetario_ColaFria.fieldName = 'recetario ColaFria'
    recetario_ColaFria.Rect = [100,249,8,8]
    pdf.addField(recetario_ColaFria)
	var cuello_ColaFria = new AcroFormCheckBox()
    cuello_ColaFria.fieldName = 'cuello ColaFria'
    cuello_ColaFria.Rect = [100,261,8,8]
    pdf.addField(cuello_ColaFria)
	var hombro_ColaFria = new AcroFormCheckBox()
    hombro_ColaFria.fieldName = 'hombro ColaFria'
    hombro_ColaFria.Rect = [100,273,8,8]
    pdf.addField(hombro_ColaFria)
	var ovalo_ColaFria = new AcroFormCheckBox()
    ovalo_ColaFria.fieldName = 'ovalo ColaFria'
    ovalo_ColaFria.Rect = [100,285,8,8]
    pdf.addField(ovalo_ColaFria)
	var strip_ColaFria = new AcroFormCheckBox()
    strip_ColaFria.fieldName = 'strip ColaFria'
    strip_ColaFria.Rect = [100,297,8,8]
    pdf.addField(strip_ColaFria)

	pdf.text(['Autoad.     Cola Fría','Autoad.     Cola Fría','Autoad.     Cola Fría','Autoad.     Cola Fría','Autoad.     Cola Fría','Autoad.     Cola Fría'],80,244)

	/***** pegamento *****/
    pdf.text(['Tipo de Goma:','Fecha de Prod.','Fecha de Exp.'],30,320)
	var goma1 = new AcroFormTextField()
    goma1.fieldName = 'goma1'
    goma1.Rect = [width*2/8+40,315,50,8]
    pdf.addField(goma1)
	var goma2 = new AcroFormTextField()
    goma2.fieldName = 'goma2'
    goma2.Rect = [width*3/8+40,315,50,8]
    pdf.addField(goma2)
	var goma3 = new AcroFormTextField()
    goma3.fieldName = 'goma3'
    goma3.Rect = [width*4/8+40,315,50,8]
    pdf.addField(goma3)
	var goma4 = new AcroFormTextField()
    goma4.fieldName = 'goma4'
    goma4.Rect = [width*5/8+40,315,50,8]
    pdf.addField(goma4)
	var goma5 = new AcroFormTextField()
    goma5.fieldName = 'goma5'
    goma5.Rect = [width*6/8+40,315,50,8]
    pdf.addField(goma5)

	var fechaProd1 = new AcroFormTextField()
    fechaProd1.fieldName = 'fechaProd1'
    fechaProd1.Rect = [width*2/8+40,327,50,8]
    pdf.addField(fechaProd1)
	var fechaProd2 = new AcroFormTextField()
    fechaProd2.fieldName = 'fechaProd2'
    fechaProd2.Rect = [width*3/8+40,327,50,8]
    pdf.addField(fechaProd2)
	var fechaProd3 = new AcroFormTextField()
    fechaProd3.fieldName = 'fechaProd3'
    fechaProd3.Rect = [width*4/8+40,327,50,8]
    pdf.addField(fechaProd3)
	var fechaProd4 = new AcroFormTextField()
    fechaProd4.fieldName = 'fechaProd4'
    fechaProd4.Rect = [width*5/8+40,327,50,8]
    pdf.addField(fechaProd4)
	var fechaProd5 = new AcroFormTextField()
    fechaProd5.fieldName = 'fechaProd5'
    fechaProd5.Rect = [width*6/8+40,327,50,8]
    pdf.addField(fechaProd5)
	var fechaExp1 = new AcroFormTextField()
    fechaExp1.fieldName = 'fechaExp1'
    fechaExp1.Rect = [width*2/8+40,339,50,8]
    pdf.addField(fechaExp1)
	var fechaExp2 = new AcroFormTextField()
    fechaExp2.fieldName = 'fechaExp2'
    fechaExp2.Rect = [width*3/8+40,339,50,8]
    pdf.addField(fechaExp2)
	var fechaExp3 = new AcroFormTextField()
    fechaExp3.fieldName = 'fechaExp3'
    fechaExp3.Rect = [width*4/8+40,339,50,8]
    pdf.addField(fechaExp3)
	var fechaExp4 = new AcroFormTextField()
    fechaExp4.fieldName = 'fechaExp4'
    fechaExp4.Rect = [width*5/8+40,339,50,8]
    pdf.addField(fechaExp4)
	var fechaExp5 = new AcroFormTextField()
    fechaExp5.fieldName = 'fechaExp5'
    fechaExp5.Rect = [width*6/8+40,339,50,8]
    pdf.addField(fechaExp5)

    pdf.line(20,360,width-20,360)

	/**** caja de carton corrugado ****/
    pdf.text(['Proveedor','Fecha de Prod. G:Grapas','Sellado: G/CA  CA: Cinta Adhesiva'],30,370)
	var proveedor1 = new AcroFormTextField()
    proveedor1.fieldName = 'proveedor1'
    proveedor1.Rect = [width*2/8+40,365,50,8]
    pdf.addField(proveedor1)
	var proveedor2 = new AcroFormTextField()
    proveedor2.fieldName = 'proveedor2'
    proveedor2.Rect = [width*3/8+40,365,50,8]
    pdf.addField(proveedor2)
	var proveedor3 = new AcroFormTextField()
    proveedor3.fieldName = 'proveedor3'
    proveedor3.Rect = [width*4/8+40,365,50,8]
    pdf.addField(proveedor3)
	var proveedor4 = new AcroFormTextField()
    proveedor4.fieldName = 'proveedor4'
    proveedor4.Rect = [width*5/8+40,365,50,8]
    pdf.addField(proveedor4)
	var proveedor5 = new AcroFormTextField()
    proveedor5.fieldName = 'proveedor5'
    proveedor5.Rect = [width*6/8+40,365,50,8]
    pdf.addField(proveedor5)

	var fechaProd_caja1 = new AcroFormTextField()
    fechaProd_caja1.fieldName = 'fechaProd_caja1'
    fechaProd_caja1.Rect = [width*2/8+40,377,50,8]
    pdf.addField(fechaProd_caja1)
	var fechaProd_caja2 = new AcroFormTextField()
    fechaProd_caja2.fieldName = 'fechaProd_caja2'
    fechaProd_caja2.Rect = [width*3/8+40,377,50,8]
    pdf.addField(fechaProd_caja2)
	var fechaProd_caja3 = new AcroFormTextField()
    fechaProd_caja3.fieldName = 'fechaProd_caja3'
    fechaProd_caja3.Rect = [width*4/8+40,377,50,8]
    pdf.addField(fechaProd_caja3)
	var fechaProd_caja4 = new AcroFormTextField()
    fechaProd_caja4.fieldName = 'fechaProd_caja4'
    fechaProd_caja4.Rect = [width*5/8+40,377,50,8]
    pdf.addField(fechaProd_caja4)
	var fechaProd_caja5 = new AcroFormTextField()
    fechaProd_caja5.fieldName = 'fechaProd_caja5'
    fechaProd_caja5.Rect = [width*6/8+40,377,50,8]
    pdf.addField(fechaProd_caja5)

	pdf.text('G           CA',width*2/8+50,396)
	pdf.text('G           CA',width*3/8+50,396)
	pdf.text('G           CA',width*4/8+50,396)
	pdf.text('G           CA',width*5/8+50,396)
	pdf.text('G           CA',width*6/8+50,396)

	var g1 = new AcroFormCheckBox()
    g1.fieldName = 'g1'
    g1.Rect = [width*2/8+40,389,8,8]
    pdf.addField(g1)
	var g2 = new AcroFormCheckBox()
    g2.fieldName = 'g2'
    g2.Rect = [width*3/8+40,389,8,8]
    pdf.addField(g2)
	var g3 = new AcroFormCheckBox()
    g3.fieldName = 'g3'
    g3.Rect = [width*4/8+40,389,8,8]
    pdf.addField(g3)
	var g4 = new AcroFormCheckBox()
    g4.fieldName = 'g4'
    g4.Rect = [width*5/8+40,389,8,8]
    pdf.addField(g4)
	var g5 = new AcroFormCheckBox()
    g5.fieldName = 'g5'
    g5.Rect = [width*6/8+40,389,8,8]
    pdf.addField(g5)

	var ca1 = new AcroFormCheckBox()
    ca1.fieldName = 'ca1'
    ca1.Rect = [width*2/8+65,389,8,8]
    pdf.addField(ca1)
	var ca2 = new AcroFormCheckBox()
    ca2.fieldName = 'ca2'
    ca2.Rect = [width*3/8+65,389,8,8]
    pdf.addField(ca2)
	var ca3 = new AcroFormCheckBox()
    ca3.fieldName = 'ca3'
    ca3.Rect = [width*4/8+65,389,8,8]
    pdf.addField(ca3)
	var ca4 = new AcroFormCheckBox()
    ca4.fieldName = 'ca4'
    ca4.Rect = [width*5/8+65,389,8,8]
    pdf.addField(ca4)
	var ca5 = new AcroFormCheckBox()
    ca5.fieldName = 'ca5'
    ca5.Rect = [width*6/8+65,389,8,8]
    pdf.addField(ca5)

    pdf.line(20,410,width-20,410)

	/***** tapas *****/
    pdf.text(['Modelo:','NR / OP:    NR: Irrellenable','Fecha de Prod.:  OP: Rellenable','Proveedor:'],30,420)
	var modelo1 = new AcroFormTextField()
    modelo1.fieldName = 'modelo1'
    modelo1.Rect = [width*2/8+40,415,50,8]
    pdf.addField(modelo1)
	var modelo2 = new AcroFormTextField()
    modelo2.fieldName = 'modelo2'
    modelo2.Rect = [width*3/8+40,415,50,8]
    pdf.addField(modelo2)
	var modelo3 = new AcroFormTextField()
    modelo3.fieldName = 'modelo3'
    modelo3.Rect = [width*4/8+40,415,50,8]
    pdf.addField(modelo3)
	var modelo4 = new AcroFormTextField()
    modelo4.fieldName = 'modelo4'
    modelo4.Rect = [width*5/8+40,415,50,8]
    pdf.addField(modelo4)
	var modelo5 = new AcroFormTextField()
    modelo5.fieldName = 'modelo5'
    modelo5.Rect = [width*6/8+40,415,50,8]
    pdf.addField(modelo5)

	pdf.text('NR         OP',width*2/8+50,434)
	pdf.text('NR         OP',width*3/8+50,434)
	pdf.text('NR         OP',width*4/8+50,434)
	pdf.text('NR         OP',width*5/8+50,434)
	pdf.text('NR         OP',width*6/8+50,434)

	var nr1 = new AcroFormCheckBox()
    nr1.fieldName = 'nr1'
    nr1.Rect = [width*2/8+40,427,8,8]
    pdf.addField(nr1)
	var nr2 = new AcroFormCheckBox()
    nr2.fieldName = 'nr2'
    nr2.Rect = [width*3/8+40,427,8,8]
    pdf.addField(nr2)
	var nr3 = new AcroFormCheckBox()
    nr3.fieldName = 'nr3'
    nr3.Rect = [width*4/8+40,427,8,8]
    pdf.addField(nr3)
	var nr4 = new AcroFormCheckBox()
    nr4.fieldName = 'nr4'
    nr4.Rect = [width*5/8+40,427,8,8]
    pdf.addField(nr4)
	var nr5 = new AcroFormCheckBox()
    nr5.fieldName = 'nr5'
    nr5.Rect = [width*6/8+40,427,8,8]
    pdf.addField(nr5)
	
	var op1 = new AcroFormCheckBox()
    op1.fieldName = 'op1'
    op1.Rect = [width*2/8+65,427,8,8]
    pdf.addField(op1)
	var op2 = new AcroFormCheckBox()
    op2.fieldName = 'op2'
    op2.Rect = [width*3/8+65,427,8,8]
    pdf.addField(op2)
	var op3 = new AcroFormCheckBox()
    op3.fieldName = 'op3'
    op3.Rect = [width*4/8+65,427,8,8]
    pdf.addField(op3)
	var op4 = new AcroFormCheckBox()
    op4.fieldName = 'op4'
    op4.Rect = [width*5/8+65,427,8,8]
    pdf.addField(op4)
	var op5 = new AcroFormCheckBox()
    op5.fieldName = 'op5'
    op5.Rect = [width*6/8+65,427,8,8]
    pdf.addField(op5)


	var fechaProd_tapas1= new AcroFormTextField()
    fechaProd_tapas1.fieldName = 'fechaProd_tapas1'
    fechaProd_tapas1.Rect = [width*2/8+40,439,50,8]
    pdf.addField(fechaProd_tapas1)
	var fechaProd_tapas2= new AcroFormTextField()
    fechaProd_tapas2.fieldName = 'fechaProd_tapas2'
    fechaProd_tapas2.Rect = [width*3/8+40,439,50,8]
    pdf.addField(fechaProd_tapas2)
	var fechaProd_tapas3= new AcroFormTextField()
    fechaProd_tapas3.fieldName = 'fechaProd_tapas3'
    fechaProd_tapas3.Rect = [width*4/8+40,439,50,8]
    pdf.addField(fechaProd_tapas3)
	var fechaProd_tapas4= new AcroFormTextField()
    fechaProd_tapas4.fieldName = 'fechaProd_tapas4'
    fechaProd_tapas4.Rect = [width*5/8+40,439,50,8]
    pdf.addField(fechaProd_tapas4)
	var fechaProd_tapas5= new AcroFormTextField()
    fechaProd_tapas5.fieldName = 'fechaProd_tapas5'
    fechaProd_tapas5.Rect = [width*6/8+40,439,50,8]
    pdf.addField(fechaProd_tapas5)

	var proveedor_tapas1= new AcroFormTextField()
    proveedor_tapas1.fieldName = 'proveedor_tapas1'
    proveedor_tapas1.Rect = [width*2/8+40,451,50,8]
    pdf.addField(proveedor_tapas1)
	var proveedor_tapas2= new AcroFormTextField()
    proveedor_tapas2.fieldName = 'proveedor_tapas2'
    proveedor_tapas2.Rect = [width*3/8+40,451,50,8]
    pdf.addField(proveedor_tapas2)
	var proveedor_tapas3= new AcroFormTextField()
    proveedor_tapas3.fieldName = 'proveedor_tapas3'
    proveedor_tapas3.Rect = [width*4/8+40,451,50,8]
    pdf.addField(proveedor_tapas3)
	var proveedor_tapas4= new AcroFormTextField()
    proveedor_tapas4.fieldName = 'proveedor_tapas4'
    proveedor_tapas4.Rect = [width*5/8+40,451,50,8]
    pdf.addField(proveedor_tapas4)
	var proveedor_tapas5= new AcroFormTextField()
    proveedor_tapas5.fieldName = 'proveedor_tapas5'
    proveedor_tapas5.Rect = [width*6/8+40,451,50,8]
    pdf.addField(proveedor_tapas5)

    pdf.line(20,470,width-20,470)
	
	/***** tipo de envase *****/
    pdf.text(['VR / PET / Otros:  VR: Vidrio Reciclado','Fecha de Prod. (VN)  VN: Vidrio Nuevo','Proveedor:','Tipo de lavado:'],30,480)
	var vrPetOtros1= new AcroFormTextField()
    vrPetOtros1.fieldName = 'vrPetOtros1'
    vrPetOtros1.Rect = [width*2/8+40,475,50,8]
    pdf.addField(vrPetOtros1)
	var vrPetOtros2= new AcroFormTextField()
    vrPetOtros2.fieldName = 'vrPetOtros2'
    vrPetOtros2.Rect = [width*3/8+40,475,50,8]
    pdf.addField(vrPetOtros2)
	var vrPetOtros3= new AcroFormTextField()
    vrPetOtros3.fieldName = 'vrPetOtros3'
    vrPetOtros3.Rect = [width*4/8+40,475,50,8]
    pdf.addField(vrPetOtros3)
	var vrPetOtros4= new AcroFormTextField()
    vrPetOtros4.fieldName = 'vrPetOtros4'
    vrPetOtros4.Rect = [width*5/8+40,475,50,8]
    pdf.addField(vrPetOtros4)
	var vrPetOtros5= new AcroFormTextField()
    vrPetOtros5.fieldName = 'vrPetOtros5'
    vrPetOtros5.Rect = [width*6/8+40,475,50,8]
    pdf.addField(vrPetOtros5)

	var fechaProd_envase1= new AcroFormTextField()
    fechaProd_envase1.fieldName = 'fechaProd_envase1'
    fechaProd_envase1.Rect = [width*2/8+40,487,50,8]
    pdf.addField(fechaProd_envase1)
	var fechaProd_envase2= new AcroFormTextField()
    fechaProd_envase2.fieldName = 'fechaProd_envase2'
    fechaProd_envase2.Rect = [width*3/8+40,487,50,8]
    pdf.addField(fechaProd_envase2)
	var fechaProd_envase3= new AcroFormTextField()
    fechaProd_envase3.fieldName = 'fechaProd_envase3'
    fechaProd_envase3.Rect = [width*4/8+40,487,50,8]
    pdf.addField(fechaProd_envase3)
	var fechaProd_envase4= new AcroFormTextField()
    fechaProd_envase4.fieldName = 'fechaProd_envase4'
    fechaProd_envase4.Rect = [width*5/8+40,487,50,8]
    pdf.addField(fechaProd_envase4)
	var fechaProd_envase5= new AcroFormTextField()
    fechaProd_envase5.fieldName = 'fechaProd_envase5'
    fechaProd_envase5.Rect = [width*6/8+40,487,50,8]
    pdf.addField(fechaProd_envase5)

	var proveedor_envase1= new AcroFormTextField()
    proveedor_envase1.fieldName = 'proveedor_envase1'
    proveedor_envase1.Rect = [width*2/8+40,499,50,8]
    pdf.addField(proveedor_envase1)
	var proveedor_envase2= new AcroFormTextField()
    proveedor_envase2.fieldName = 'proveedor_envase2'
    proveedor_envase2.Rect = [width*3/8+40,499,50,8]
    pdf.addField(proveedor_envase2)
	var proveedor_envase3= new AcroFormTextField()
    proveedor_envase3.fieldName = 'proveedor_envase3'
    proveedor_envase3.Rect = [width*4/8+40,499,50,8]
    pdf.addField(proveedor_envase3)
	var proveedor_envase4= new AcroFormTextField()
    proveedor_envase4.fieldName = 'proveedor_envase4'
    proveedor_envase4.Rect = [width*5/8+40,499,50,8]
    pdf.addField(proveedor_envase4)
	var proveedor_envase5= new AcroFormTextField()
    proveedor_envase5.fieldName = 'proveedor_envase5'
    proveedor_envase5.Rect = [width*6/8+40,499,50,8]
    pdf.addField(proveedor_envase5)

	pdf.text('E            L',width*2/8+50,518)
	pdf.text('E            L',width*3/8+50,518)
	pdf.text('E            L',width*4/8+50,518)
	pdf.text('E            L',width*5/8+50,518)
	pdf.text('E            L',width*6/8+50,518)

	var e1 = new AcroFormCheckBox()
    e1.fieldName = 'e1'
    e1.Rect = [width*2/8+40,511,8,8]
    pdf.addField(e1)
	var e2 = new AcroFormCheckBox()
    e2.fieldName = 'e2'
    e2.Rect = [width*3/8+40,511,8,8]
    pdf.addField(e2)
	var e3 = new AcroFormCheckBox()
    e3.fieldName = 'e3'
    e3.Rect = [width*4/8+40,511,8,8]
    pdf.addField(e3)
	var e4 = new AcroFormCheckBox()
    e4.fieldName = 'e4'
    e4.Rect = [width*5/8+40,511,8,8]
    pdf.addField(e4)
	var e5 = new AcroFormCheckBox()
    e5.fieldName = 'e5'
    e5.Rect = [width*6/8+40,511,8,8]
    pdf.addField(e5)
	
	var l1 = new AcroFormCheckBox()
    l1.fieldName = 'l1'
    l1.Rect = [width*2/8+65,511,8,8]
    pdf.addField(l1)
	var l2 = new AcroFormCheckBox()
    l2.fieldName = 'l2'
    l2.Rect = [width*3/8+65,511,8,8]
    pdf.addField(l2)
	var l3 = new AcroFormCheckBox()
    l3.fieldName = 'l3'
    l3.Rect = [width*4/8+65,511,8,8]
    pdf.addField(l3)
	var l4 = new AcroFormCheckBox()
    l4.fieldName = 'l4'
    l4.Rect = [width*5/8+65,511,8,8]
    pdf.addField(l4)
	var l5 = new AcroFormCheckBox()
    l5.fieldName = 'l5'
    l5.Rect = [width*6/8+65,511,8,8]
    pdf.addField(l5)

    pdf.setFontSize(6)
	pdf.setLineHeightFactor(1.15)
    pdf.text('Etiquetas',15,270,{angle:90})
    pdf.text('Proveedor / OT y/o OC',140,270,{angle:90,maxWidth:30})
    pdf.text('Pegamento',15,350,{angle:90,maxWidth:50})
	pdf.text('Caja de Cartón Corrugado',15,400,{angle:90,maxWidth:50})
	pdf.text('Tapas',15,450,{angle:90,maxWidth:50})
	pdf.text('Tipo de envase',15,500,{angle:90,maxWidth:30})
	
    pdf.setFontSize(8)
    pdf.line(20,530,width-20,530)
	pdf.setLineHeightFactor(2)
    pdf.text(['Concentración de ácido cítrico:','pH antes de lavado los envases','pH después de lavado los envases'],20,550)
    var acidoCitrico1 = new AcroFormTextField()
    acidoCitrico1.fieldName = 'acidoCitrico1'
    acidoCitrico1.Rect = [width*2/8+40,545,50,8]
    pdf.addField(acidoCitrico1)
	var acidoCitrico2 = new AcroFormTextField()
    acidoCitrico2.fieldName = 'acidoCitrico2'
    acidoCitrico2.Rect = [width*3/8+40,545,50,8]
    pdf.addField(acidoCitrico2)
	var acidoCitrico3 = new AcroFormTextField()
    acidoCitrico3.fieldName = 'acidoCitrico3'
    acidoCitrico3.Rect = [width*4/8+40,545,50,8]
    pdf.addField(acidoCitrico3)
	var acidoCitrico4 = new AcroFormTextField()
    acidoCitrico4.fieldName = 'acidoCitrico4'
    acidoCitrico4.Rect = [width*5/8+40,545,50,8]
    pdf.addField(acidoCitrico4)
	var acidoCitrico5 = new AcroFormTextField()
    acidoCitrico5.fieldName = 'acidoCitrico5'
    acidoCitrico5.Rect = [width*6/8+40,545,50,8]
    pdf.addField(acidoCitrico5)
    
	var phAntes1 = new AcroFormTextField()
    phAntes1.fieldName = 'phAntes1'
    phAntes1.Rect = [width*2/8+40,557,50,8]
    pdf.addField(phAntes1)
	var phAntes2 = new AcroFormTextField()
    phAntes2.fieldName = 'phAntes2'
    phAntes2.Rect = [width*3/8+40,557,50,8]
    pdf.addField(phAntes2)
	var phAntes3 = new AcroFormTextField()
    phAntes3.fieldName = 'phAntes3'
    phAntes3.Rect = [width*4/8+40,557,50,8]
    pdf.addField(phAntes3)
	var phAntes4 = new AcroFormTextField()
    phAntes4.fieldName = 'phAntes4'
    phAntes4.Rect = [width*5/8+40,557,50,8]
    pdf.addField(phAntes4)
	var phAntes5 = new AcroFormTextField()
    phAntes5.fieldName = 'phAntes5'
    phAntes5.Rect = [width*6/8+40,557,50,8]
    pdf.addField(phAntes5)

	var phDespues1 = new AcroFormTextField()
    phDespues1.fieldName = 'phDespues1'
    phDespues1.Rect = [width*2/8+40,569,50,8]
    pdf.addField(phDespues1)
	var phDespues2 = new AcroFormTextField()
    phDespues2.fieldName = 'phDespues2'
    phDespues2.Rect = [width*3/8+40,569,50,8]
    pdf.addField(phDespues2)
	var phDespues3 = new AcroFormTextField()
    phDespues3.fieldName = 'phDespues3'
    phDespues3.Rect = [width*4/8+40,569,50,8]
    pdf.addField(phDespues3)
	var phDespues4 = new AcroFormTextField()
    phDespues4.fieldName = 'phDespues4'
    phDespues4.Rect = [width*5/8+40,569,50,8]
    pdf.addField(phDespues4)
	var phDespues5 = new AcroFormTextField()
    phDespues5.fieldName = 'phDespues5'
    phDespues5.Rect = [width*6/8+40,569,50,8]
    pdf.addField(phDespues5)

    /*******************************/
    /*            pag 2            */
	/*******************************/
    pdf.addPage()
    pdf.setLineHeightFactor(2)
    pdf.setFontSize(14)
    pdf.text('INSPECCIÓN DE LÍNEA',width/2,20,{align:'center'})
    pdf.text('Varela Hermanos, S.A.',width/2,30,{align:'center'})
    pdf.addImage(logo,'JPEG',20,10,30,25)
    pdf.line(20,35,width-20,35)
    pdf.setFontSize(8)
	//calculo del nivel de llenado
    pdf.text('CALCULO DEL NIVEL DE LLENADO',width/2,50,{align:'center'})
    pdf.rect(20,40,width-40,12)
	pdf.text('Inspección 1',width*2/8+50,60,{align:'left'})
	pdf.text('Inspección 2',width*3/8+50,60,{align:'left'})
	pdf.text('Inspección 3',width*4/8+50,60,{align:'left'})
	pdf.text('Inspección 4',width*5/8+50,60,{align:'left'})
	pdf.text('Inspección 5',width*6/8+50,60,{align:'left'})

    pdf.text(['Tanque:','Lote:','Día de Preparación:','Prueba Organoléptica:','Horas de Reposo:','Alcoholímetro:','Temperatura:','Grado Alcohólico:','pH:','Línea / T. de Licor:','Destino:','Balanza No de Serie.:','Peso de Tapas:','Peso de Envases Vacíos:','Peso de Envases LLenos:','Peso Neto Actual:','Peso Ideal:','Dif. Peso Neto','Límites:','Dif. Porcentual:'],20,70)
    var tanque1 = new AcroFormTextField()
    tanque1.fieldName = 'tanque1'
    tanque1.Rect = [width*2/8+40,65,50,8]
    pdf.addField(tanque1)
	var tanque2 = new AcroFormTextField()
    tanque2.fieldName = 'tanque2'
    tanque2.Rect = [width*3/8+40,65,50,8]
    pdf.addField(tanque2)
	var tanque3 = new AcroFormTextField()
    tanque3.fieldName = 'tanque3'
    tanque3.Rect = [width*4/8+40,65,50,8]
    pdf.addField(tanque3)
	var tanque4 = new AcroFormTextField()
    tanque4.fieldName = 'tanque4'
    tanque4.Rect = [width*5/8+40,65,50,8]
    pdf.addField(tanque4)
	var tanque5 = new AcroFormTextField()
    tanque5.fieldName = 'tanque5'
    tanque5.Rect = [width*6/8+40,65,50,8]
    pdf.addField(tanque5)

	var lote1 = new AcroFormTextField()
    lote1.fieldName = 'lote1'
    lote1.Rect = [width*2/8+40,77,50,8]
    pdf.addField(lote1)
	var lote2 = new AcroFormTextField()
    lote2.fieldName = 'lote2'
    lote2.Rect = [width*3/8+40,77,50,8]
    pdf.addField(lote2)
	var lote3 = new AcroFormTextField()
    lote3.fieldName = 'lote3'
    lote3.Rect = [width*4/8+40,77,50,8]
    pdf.addField(lote3)
	var lote4 = new AcroFormTextField()
    lote4.fieldName = 'lote4'
    lote4.Rect = [width*5/8+40,77,50,8]
    pdf.addField(lote4)
	var lote5 = new AcroFormTextField()
    lote5.fieldName = 'lote5'
    lote5.Rect = [width*6/8+40,77,50,8]
    pdf.addField(lote5)

	var diaPreparacion1 = new AcroFormTextField()
    diaPreparacion1.fieldName = 'diaPreparacion1'
    diaPreparacion1.Rect = [width*2/8+40,89,50,8]
    pdf.addField(diaPreparacion1)
	var diaPreparacion2 = new AcroFormTextField()
    diaPreparacion2.fieldName = 'diaPreparacion2'
    diaPreparacion2.Rect = [width*3/8+40,89,50,8]
    pdf.addField(diaPreparacion2)
	var diaPreparacion3 = new AcroFormTextField()
    diaPreparacion3.fieldName = 'diaPreparacion3'
    diaPreparacion3.Rect = [width*4/8+40,89,50,8]
    pdf.addField(diaPreparacion3)
	var diaPreparacion4 = new AcroFormTextField()
    diaPreparacion4.fieldName = 'diaPreparacion4'
    diaPreparacion4.Rect = [width*5/8+40,89,50,8]
    pdf.addField(diaPreparacion4)
	var diaPreparacion5 = new AcroFormTextField()
    diaPreparacion5.fieldName = 'diaPreparacion5'
    diaPreparacion5.Rect = [width*6/8+40,89,50,8]
    pdf.addField(diaPreparacion5)

	var pruebaOrganoleptica1 = new AcroFormTextField()
    pruebaOrganoleptica1.fieldName = 'pruebaOrganoleptica1'
    pruebaOrganoleptica1.Rect = [width*2/8+40,101,50,8]
    pdf.addField(pruebaOrganoleptica1)
	var pruebaOrganoleptica2 = new AcroFormTextField()
    pruebaOrganoleptica2.fieldName = 'pruebaOrganoleptica2'
    pruebaOrganoleptica2.Rect = [width*3/8+40,101,50,8]
    pdf.addField(pruebaOrganoleptica2)
	var pruebaOrganoleptica3 = new AcroFormTextField()
    pruebaOrganoleptica3.fieldName = 'pruebaOrganoleptica3'
    pruebaOrganoleptica3.Rect = [width*4/8+40,101,50,8]
    pdf.addField(pruebaOrganoleptica3)
	var pruebaOrganoleptica4 = new AcroFormTextField()
    pruebaOrganoleptica4.fieldName = 'pruebaOrganoleptica4'
    pruebaOrganoleptica4.Rect = [width*5/8+40,101,50,8]
    pdf.addField(pruebaOrganoleptica4)
	var pruebaOrganoleptica5 = new AcroFormTextField()
    pruebaOrganoleptica5.fieldName = 'pruebaOrganoleptica5'
    pruebaOrganoleptica5.Rect = [width*6/8+40,101,50,8]
    pdf.addField(pruebaOrganoleptica5)

	var horasReposo1 = new AcroFormTextField()
    horasReposo1.fieldName = 'horasReposo1'
    horasReposo1.Rect = [width*2/8+40,113,50,8]
    pdf.addField(horasReposo1)
	var horasReposo2 = new AcroFormTextField()
    horasReposo2.fieldName = 'horasReposo2'
    horasReposo2.Rect = [width*3/8+40,113,50,8]
    pdf.addField(horasReposo2)
	var horasReposo3 = new AcroFormTextField()
    horasReposo3.fieldName = 'horasReposo3'
    horasReposo3.Rect = [width*4/8+40,113,50,8]
    pdf.addField(horasReposo3)
	var horasReposo4 = new AcroFormTextField()
    horasReposo4.fieldName = 'horasReposo4'
    horasReposo4.Rect = [width*5/8+40,113,50,8]
    pdf.addField(horasReposo4)
	var horasReposo5 = new AcroFormTextField()
    horasReposo5.fieldName = 'horasReposo5'
    horasReposo5.Rect = [width*6/8+40,113,50,8]
    pdf.addField(horasReposo5)

	var alcoholimetro1 = new AcroFormTextField()
    alcoholimetro1.fieldName = 'alcoholimetro1'
    alcoholimetro1.Rect = [width*2/8+40,125,50,8]
    pdf.addField(alcoholimetro1)
	var alcoholimetro2 = new AcroFormTextField()
    alcoholimetro2.fieldName = 'alcoholimetro2'
    alcoholimetro2.Rect = [width*3/8+40,125,50,8]
    pdf.addField(alcoholimetro2)
	var alcoholimetro3 = new AcroFormTextField()
    alcoholimetro3.fieldName = 'alcoholimetro3'
    alcoholimetro3.Rect = [width*4/8+40,125,50,8]
    pdf.addField(alcoholimetro3)
	var alcoholimetro4 = new AcroFormTextField()
    alcoholimetro4.fieldName = 'alcoholimetro4'
    alcoholimetro4.Rect = [width*5/8+40,125,50,8]
    pdf.addField(alcoholimetro4)
	var alcoholimetro5 = new AcroFormTextField()
    alcoholimetro5.fieldName = 'alcoholimetro5'
    alcoholimetro5.Rect = [width*6/8+40,125,50,8]
    pdf.addField(alcoholimetro5)

	var temperatura1 = new AcroFormTextField()
    temperatura1.fieldName = 'temperatura1'
    temperatura1.Rect = [width*2/8+40,137,50,8]
    pdf.addField(temperatura1)
	var temperatura2 = new AcroFormTextField()
    temperatura2.fieldName = 'temperatura2'
    temperatura2.Rect = [width*3/8+40,137,50,8]
    pdf.addField(temperatura2)
	var temperatura3 = new AcroFormTextField()
    temperatura3.fieldName = 'temperatura3'
    temperatura3.Rect = [width*4/8+40,137,50,8]
    pdf.addField(temperatura3)
	var temperatura4 = new AcroFormTextField()
    temperatura4.fieldName = 'temperatura4'
    temperatura4.Rect = [width*5/8+40,137,50,8]
    pdf.addField(temperatura4)
	var temperatura5 = new AcroFormTextField()
    temperatura5.fieldName = 'temperatura5'
    temperatura5.Rect = [width*6/8+40,137,50,8]
    pdf.addField(temperatura5)

	var gradoAlcoholico1 = new AcroFormTextField()
    gradoAlcoholico1.fieldName = 'gradoAlcoholico1'
    gradoAlcoholico1.Rect = [width*2/8+40,149,50,8]
    pdf.addField(gradoAlcoholico1)
	var gradoAlcoholico2 = new AcroFormTextField()
    gradoAlcoholico2.fieldName = 'gradoAlcoholico2'
    gradoAlcoholico2.Rect = [width*3/8+40,149,50,8]
    pdf.addField(gradoAlcoholico2)
	var gradoAlcoholico3 = new AcroFormTextField()
    gradoAlcoholico3.fieldName = 'gradoAlcoholico3'
    gradoAlcoholico3.Rect = [width*4/8+40,149,50,8]
    pdf.addField(gradoAlcoholico3)
	var gradoAlcoholico4 = new AcroFormTextField()
    gradoAlcoholico4.fieldName = 'gradoAlcoholico4'
    gradoAlcoholico4.Rect = [width*5/8+40,149,50,8]
    pdf.addField(gradoAlcoholico4)
	var gradoAlcoholico5 = new AcroFormTextField()
    gradoAlcoholico5.fieldName = 'gradoAlcoholico5'
    gradoAlcoholico5.Rect = [width*6/8+40,149,50,8]
    pdf.addField(gradoAlcoholico5)

	var ph1 = new AcroFormTextField()
    ph1.fieldName = 'ph1'
    ph1.Rect = [width*2/8+40,161,50,8]
    pdf.addField(ph1)
	var ph2 = new AcroFormTextField()
    ph2.fieldName = 'ph2'
    ph2.Rect = [width*3/8+40,161,50,8]
    pdf.addField(ph2)
	var ph3 = new AcroFormTextField()
    ph3.fieldName = 'ph3'
    ph3.Rect = [width*4/8+40,161,50,8]
    pdf.addField(ph3)
	var ph4 = new AcroFormTextField()
    ph4.fieldName = 'ph4'
    ph4.Rect = [width*5/8+40,161,50,8]
    pdf.addField(ph4)
	var ph5 = new AcroFormTextField()
    ph5.fieldName = 'ph5'
    ph5.Rect = [width*6/8+40,161,50,8]
    pdf.addField(ph5)

	var linea1 = new AcroFormTextField()
    linea1.fieldName = 'linea1'
    linea1.Rect = [width*2/8+40,173,50,8]
    pdf.addField(linea1)
	var linea2 = new AcroFormTextField()
    linea2.fieldName = 'linea2'
    linea2.Rect = [width*3/8+40,173,50,8]
    pdf.addField(linea2)
	var linea3 = new AcroFormTextField()
    linea3.fieldName = 'linea3'
    linea3.Rect = [width*4/8+40,173,50,8]
    pdf.addField(linea3)
	var linea4 = new AcroFormTextField()
    linea4.fieldName = 'linea4'
    linea4.Rect = [width*5/8+40,173,50,8]
    pdf.addField(linea4)
	var linea5 = new AcroFormTextField()
    linea5.fieldName = 'linea5'
    linea5.Rect = [width*6/8+40,173,50,8]
    pdf.addField(linea5)

	var destino1 = new AcroFormTextField()
    destino1.fieldName = 'destino1'
    destino1.Rect = [width*2/8+40,185,50,8]
    pdf.addField(destino1)
	var destino2 = new AcroFormTextField()
    destino2.fieldName = 'destino2'
    destino2.Rect = [width*3/8+40,185,50,8]
    pdf.addField(destino2)
	var destino3 = new AcroFormTextField()
    destino3.fieldName = 'destino3'
    destino3.Rect = [width*4/8+40,185,50,8]
    pdf.addField(destino3)
	var destino4 = new AcroFormTextField()
    destino4.fieldName = 'destino4'
    destino4.Rect = [width*5/8+40,185,50,8]
    pdf.addField(destino4)
	var destino5 = new AcroFormTextField()
    destino5.fieldName = 'destino5'
    destino5.Rect = [width*6/8+40,185,50,8]
    pdf.addField(destino5)

	var numSerie1 = new AcroFormTextField()
    numSerie1.fieldName = 'numSerie1'
    numSerie1.Rect = [width*2/8+40,197,50,8]
    pdf.addField(numSerie1)
	var numSerie2 = new AcroFormTextField()
    numSerie2.fieldName = 'numSerie2'
    numSerie2.Rect = [width*3/8+40,197,50,8]
    pdf.addField(numSerie2)
	var numSerie3 = new AcroFormTextField()
    numSerie3.fieldName = 'numSerie3'
    numSerie3.Rect = [width*4/8+40,197,50,8]
    pdf.addField(numSerie3)
	var numSerie4 = new AcroFormTextField()
    numSerie4.fieldName = 'numSerie4'
    numSerie4.Rect = [width*5/8+40,197,50,8]
    pdf.addField(numSerie4)
	var numSerie5 = new AcroFormTextField()
    numSerie5.fieldName = 'numSerie5'
    numSerie5.Rect = [width*6/8+40,197,50,8]
    pdf.addField(numSerie5)

	var pesoTapas1 = new AcroFormTextField()
    pesoTapas1.fieldName = 'pesoTapas1'
    pesoTapas1.Rect = [width*2/8+40,209,50,8]
    pdf.addField(pesoTapas1)
	var pesoTapas2 = new AcroFormTextField()
    pesoTapas2.fieldName = 'pesoTapas2'
    pesoTapas2.Rect = [width*3/8+40,209,50,8]
    pdf.addField(pesoTapas2)
	var pesoTapas3 = new AcroFormTextField()
    pesoTapas3.fieldName = 'pesoTapas3'
    pesoTapas3.Rect = [width*4/8+40,209,50,8]
    pdf.addField(pesoTapas3)
	var pesoTapas4 = new AcroFormTextField()
    pesoTapas4.fieldName = 'pesoTapas4'
    pesoTapas4.Rect = [width*5/8+40,209,50,8]
    pdf.addField(pesoTapas4)
	var pesoTapas5 = new AcroFormTextField()
    pesoTapas5.fieldName = 'pesoTapas5'
    pesoTapas5.Rect = [width*6/8+40,209,50,8]
    pdf.addField(pesoTapas5)

	var pesoEnvasesVacios1 = new AcroFormTextField()
    pesoEnvasesVacios1.fieldName = 'pesoEnvasesVacios1'
    pesoEnvasesVacios1.Rect = [width*2/8+40,221,50,8]
    pdf.addField(pesoEnvasesVacios1)
	var pesoEnvasesVacios2 = new AcroFormTextField()
    pesoEnvasesVacios2.fieldName = 'pesoEnvasesVacios2'
    pesoEnvasesVacios2.Rect = [width*3/8+40,221,50,8]
    pdf.addField(pesoEnvasesVacios2)
	var pesoEnvasesVacios3 = new AcroFormTextField()
    pesoEnvasesVacios3.fieldName = 'pesoEnvasesVacios3'
    pesoEnvasesVacios3.Rect = [width*4/8+40,221,50,8]
    pdf.addField(pesoEnvasesVacios3)
	var pesoEnvasesVacios4 = new AcroFormTextField()
    pesoEnvasesVacios4.fieldName = 'pesoEnvasesVacios4'
    pesoEnvasesVacios4.Rect = [width*5/8+40,221,50,8]
    pdf.addField(pesoEnvasesVacios4)
	var pesoEnvasesVacios5 = new AcroFormTextField()
    pesoEnvasesVacios5.fieldName = 'pesoEnvasesVacios5'
    pesoEnvasesVacios5.Rect = [width*6/8+40,221,50,8]
    pdf.addField(pesoEnvasesVacios5)

	var pesoEnvasesLlenos1 = new AcroFormTextField()
    pesoEnvasesLlenos1.fieldName = 'pesoEnvasesLlenos1'
    pesoEnvasesLlenos1.Rect = [width*2/8+40,233,50,8]
    pdf.addField(pesoEnvasesLlenos1)
	var pesoEnvasesLlenos2 = new AcroFormTextField()
    pesoEnvasesLlenos2.fieldName = 'pesoEnvasesLlenos2'
    pesoEnvasesLlenos2.Rect = [width*3/8+40,233,50,8]
    pdf.addField(pesoEnvasesLlenos2)
	var pesoEnvasesLlenos3 = new AcroFormTextField()
    pesoEnvasesLlenos3.fieldName = 'pesoEnvasesLlenos3'
    pesoEnvasesLlenos3.Rect = [width*4/8+40,233,50,8]
    pdf.addField(pesoEnvasesLlenos3)
	var pesoEnvasesLlenos4 = new AcroFormTextField()
    pesoEnvasesLlenos4.fieldName = 'pesoEnvasesLlenos4'
    pesoEnvasesLlenos4.Rect = [width*5/8+40,233,50,8]
    pdf.addField(pesoEnvasesLlenos4)
	var pesoEnvasesLlenos5 = new AcroFormTextField()
    pesoEnvasesLlenos5.fieldName = 'pesoEnvasesLlenos5'
    pesoEnvasesLlenos5.Rect = [width*6/8+40,233,50,8]
    pdf.addField(pesoEnvasesLlenos5)

	var pesoNetoActual1 = new AcroFormTextField()
    pesoNetoActual1.fieldName = 'pesoNetoActual1'
    pesoNetoActual1.Rect = [width*2/8+40,245,50,8]
    pdf.addField(pesoNetoActual1)
	var pesoNetoActual2 = new AcroFormTextField()
    pesoNetoActual2.fieldName = 'pesoNetoActual2'
    pesoNetoActual2.Rect = [width*3/8+40,245,50,8]
    pdf.addField(pesoNetoActual2)
	var pesoNetoActual3 = new AcroFormTextField()
    pesoNetoActual3.fieldName = 'pesoNetoActual3'
    pesoNetoActual3.Rect = [width*4/8+40,245,50,8]
    pdf.addField(pesoNetoActual3)
	var pesoNetoActual4 = new AcroFormTextField()
    pesoNetoActual4.fieldName = 'pesoNetoActual4'
    pesoNetoActual4.Rect = [width*5/8+40,245,50,8]
    pdf.addField(pesoNetoActual4)
	var pesoNetoActual5 = new AcroFormTextField()
    pesoNetoActual5.fieldName = 'pesoNetoActual5'
    pesoNetoActual5.Rect = [width*6/8+40,245,50,8]
    pdf.addField(pesoNetoActual5)

	var pesoIdeal1 = new AcroFormTextField()
    pesoIdeal1.fieldName = 'pesoIdeal1'
    pesoIdeal1.Rect = [width*2/8+40,257,50,8]
    pdf.addField(pesoIdeal1)
	var pesoIdeal2 = new AcroFormTextField()
    pesoIdeal2.fieldName = 'pesoIdeal2'
    pesoIdeal2.Rect = [width*3/8+40,257,50,8]
    pdf.addField(pesoIdeal2)
	var pesoIdeal3 = new AcroFormTextField()
    pesoIdeal3.fieldName = 'pesoIdeal3'
    pesoIdeal3.Rect = [width*4/8+40,257,50,8]
    pdf.addField(pesoIdeal3)
	var pesoIdeal4 = new AcroFormTextField()
    pesoIdeal4.fieldName = 'pesoIdeal4'
    pesoIdeal4.Rect = [width*5/8+40,257,50,8]
    pdf.addField(pesoIdeal4)
	var pesoIdeal5 = new AcroFormTextField()
    pesoIdeal5.fieldName = 'pesoIdeal5'
    pesoIdeal5.Rect = [width*6/8+40,257,50,8]
    pdf.addField(pesoIdeal5)

	var difPesoNeto1 = new AcroFormTextField()
    difPesoNeto1.fieldName = 'difPesoNeto1'
    difPesoNeto1.Rect = [width*2/8+40,269,50,8]
    pdf.addField(difPesoNeto1)
	var difPesoNeto2 = new AcroFormTextField()
    difPesoNeto2.fieldName = 'difPesoNeto2'
    difPesoNeto2.Rect = [width*3/8+40,269,50,8]
    pdf.addField(difPesoNeto2)
	var difPesoNeto3 = new AcroFormTextField()
    difPesoNeto3.fieldName = 'difPesoNeto3'
    difPesoNeto3.Rect = [width*4/8+40,269,50,8]
    pdf.addField(difPesoNeto3)
	var difPesoNeto4 = new AcroFormTextField()
    difPesoNeto4.fieldName = 'difPesoNeto4'
    difPesoNeto4.Rect = [width*5/8+40,269,50,8]
    pdf.addField(difPesoNeto4)
	var difPesoNeto5 = new AcroFormTextField()
    difPesoNeto5.fieldName = 'difPesoNeto5'
    difPesoNeto5.Rect = [width*6/8+40,269,50,8]
    pdf.addField(difPesoNeto5)

	var limites1 = new AcroFormTextField()
    limites1.fieldName = 'limites1'
    limites1.Rect = [width*2/8+40,281,50,8]
    pdf.addField(limites1)
	var limites2 = new AcroFormTextField()
    limites2.fieldName = 'limites2'
    limites2.Rect = [width*3/8+40,281,50,8]
    pdf.addField(limites2)
	var limites3 = new AcroFormTextField()
    limites3.fieldName = 'limites3'
    limites3.Rect = [width*4/8+40,281,50,8]
    pdf.addField(limites3)
	var limites4 = new AcroFormTextField()
    limites4.fieldName = 'limites4'
    limites4.Rect = [width*5/8+40,281,50,8]
    pdf.addField(limites4)
	var limites5 = new AcroFormTextField()
    limites5.fieldName = 'limites5'
    limites5.Rect = [width*6/8+40,281,50,8]
    pdf.addField(limites5)

	var difPorcentual1 = new AcroFormTextField()
    difPorcentual1.fieldName = 'difPorcentual1'
    difPorcentual1.Rect = [width*2/8+40,293,50,8]
    pdf.addField(difPorcentual1)
	var difPorcentual2 = new AcroFormTextField()
    difPorcentual2.fieldName = 'difPorcentual2'
    difPorcentual2.Rect = [width*3/8+40,293,50,8]
    pdf.addField(difPorcentual2)
	var difPorcentual3 = new AcroFormTextField()
    difPorcentual3.fieldName = 'difPorcentual3'
    difPorcentual3.Rect = [width*4/8+40,293,50,8]
    pdf.addField(difPorcentual3)
	var difPorcentual4 = new AcroFormTextField()
    difPorcentual4.fieldName = 'difPorcentual4'
    difPorcentual4.Rect = [width*5/8+40,293,50,8]
    pdf.addField(difPorcentual4)
	var difPorcentual5 = new AcroFormTextField()
    difPorcentual5.fieldName = 'difPorcentual5'
    difPorcentual5.Rect = [width*6/8+40,293,50,8]
    pdf.addField(difPorcentual5)
	
	//personal de linea
	pdf.text('PERSONAL DE LÍNEA',width/2,320,{align:'center'})
    pdf.rect(20,310,width-40,12)
    pdf.text('Inspección 1',width*2/8+50,330,{align:'left'})
	pdf.text('Inspección 2',width*3/8+50,330,{align:'left'})
	pdf.text('Inspección 3',width*4/8+50,330,{align:'left'})
	pdf.text('Inspección 4',width*5/8+50,330,{align:'left'})
	pdf.text('Inspección 5',width*6/8+50,330,{align:'left'})
    pdf.setLineHeightFactor(2)
    pdf.text(['1) Enjuag./Lavadora','2) 1ra Inspección','3) LLenadora','4) 2da. Inspección','5)Tapadora','6) Etiquetadora','7) Mesa de Inspección','8) Recogiendo','9) Estibando'],20,340)
    var enjuague1 = new AcroFormTextField()
    enjuague1.fieldName = 'enjuague1'
    enjuague1.Rect = [width*2/8+40,335,50,8]
    pdf.addField(enjuague1)
	var enjuague2 = new AcroFormTextField()
    enjuague2.fieldName = 'enjuague2'
    enjuague2.Rect = [width*3/8+40,335,50,8]
    pdf.addField(enjuague2)
	var enjuague3 = new AcroFormTextField()
    enjuague3.fieldName = 'enjuague3'
    enjuague3.Rect = [width*4/8+40,335,50,8]
    pdf.addField(enjuague3)
	var enjuague4 = new AcroFormTextField()
    enjuague4.fieldName = 'enjuague4'
    enjuague4.Rect = [width*5/8+40,335,50,8]
    pdf.addField(enjuague4)
	var enjuague5 = new AcroFormTextField()
    enjuague5.fieldName = 'enjuague5'
    enjuague5.Rect = [width*6/8+40,335,50,8]
    pdf.addField(enjuague5)

	var primeraInspeccion1 = new AcroFormTextField()
    primeraInspeccion1.fieldName = 'primeraInspeccion1'
    primeraInspeccion1.Rect = [width*2/8+40,347,50,8]
    pdf.addField(primeraInspeccion1)
	var primeraInspeccion2 = new AcroFormTextField()
    primeraInspeccion2.fieldName = 'primeraInspeccion2'
    primeraInspeccion2.Rect = [width*3/8+40,347,50,8]
    pdf.addField(primeraInspeccion2)
	var primeraInspeccion3 = new AcroFormTextField()
    primeraInspeccion3.fieldName = 'primeraInspeccion3'
    primeraInspeccion3.Rect = [width*4/8+40,347,50,8]
    pdf.addField(primeraInspeccion3)
	var primeraInspeccion4 = new AcroFormTextField()
    primeraInspeccion4.fieldName = 'primeraInspeccion4'
    primeraInspeccion4.Rect = [width*5/8+40,347,50,8]
    pdf.addField(primeraInspeccion4)
	var primeraInspeccion5 = new AcroFormTextField()
    primeraInspeccion5.fieldName = 'primeraInspeccion5'
    primeraInspeccion5.Rect = [width*6/8+40,347,50,8]
    pdf.addField(primeraInspeccion5)

	var llenadora1 = new AcroFormTextField()
    llenadora1.fieldName = 'llenadora1'
    llenadora1.Rect = [width*2/8+40,359,50,8]
    pdf.addField(llenadora1)
	var llenadora2 = new AcroFormTextField()
    llenadora2.fieldName = 'llenadora2'
    llenadora2.Rect = [width*3/8+40,359,50,8]
    pdf.addField(llenadora2)
	var llenadora3 = new AcroFormTextField()
    llenadora3.fieldName = 'llenadora3'
    llenadora3.Rect = [width*4/8+40,359,50,8]
    pdf.addField(llenadora3)
	var llenadora4 = new AcroFormTextField()
    llenadora4.fieldName = 'llenadora4'
    llenadora4.Rect = [width*5/8+40,359,50,8]
    pdf.addField(llenadora4)
	var llenadora5 = new AcroFormTextField()
    llenadora5.fieldName = 'llenadora5'
    llenadora5.Rect = [width*6/8+40,359,50,8]
    pdf.addField(llenadora5)

	var segundaInspeccion1 = new AcroFormTextField()
    segundaInspeccion1.fieldName = 'segundaInspeccion1'
    segundaInspeccion1.Rect = [width*2/8+40,371,50,8]
    pdf.addField(segundaInspeccion1)
	var segundaInspeccion2 = new AcroFormTextField()
    segundaInspeccion2.fieldName = 'segundaInspeccion2'
    segundaInspeccion2.Rect = [width*3/8+40,371,50,8]
    pdf.addField(segundaInspeccion2)
	var segundaInspeccion3 = new AcroFormTextField()
    segundaInspeccion3.fieldName = 'segundaInspeccion3'
    segundaInspeccion3.Rect = [width*4/8+40,371,50,8]
    pdf.addField(segundaInspeccion3)
	var segundaInspeccion4 = new AcroFormTextField()
    segundaInspeccion4.fieldName = 'segundaInspeccion4'
    segundaInspeccion4.Rect = [width*5/8+40,371,50,8]
    pdf.addField(segundaInspeccion4)
	var segundaInspeccion5 = new AcroFormTextField()
    segundaInspeccion5.fieldName = 'segundaInspeccion5'
    segundaInspeccion5.Rect = [width*6/8+40,371,50,8]
    pdf.addField(segundaInspeccion5)

	var tapadora1 = new AcroFormTextField()
    tapadora1.fieldName = 'tapadora1'
    tapadora1.Rect = [width*2/8+40,383,50,8]
    pdf.addField(tapadora1)
	var tapadora2 = new AcroFormTextField()
    tapadora2.fieldName = 'tapadora2'
    tapadora2.Rect = [width*3/8+40,383,50,8]
    pdf.addField(tapadora2)
	var tapadora3 = new AcroFormTextField()
    tapadora3.fieldName = 'tapadora3'
    tapadora3.Rect = [width*4/8+40,383,50,8]
    pdf.addField(tapadora3)
	var tapadora4 = new AcroFormTextField()
    tapadora4.fieldName = 'tapadora4'
    tapadora4.Rect = [width*5/8+40,383,50,8]
    pdf.addField(tapadora4)
	var tapadora5 = new AcroFormTextField()
    tapadora5.fieldName = 'tapadora5'
    tapadora5.Rect = [width*6/8+40,383,50,8]
    pdf.addField(tapadora5)

	var etiquetadora1 = new AcroFormTextField()
    etiquetadora1.fieldName = 'etiquetadora1'
    etiquetadora1.Rect = [width*2/8+40,395,50,8]
    pdf.addField(etiquetadora1)
	var etiquetadora2 = new AcroFormTextField()
    etiquetadora2.fieldName = 'etiquetadora2'
    etiquetadora2.Rect = [width*3/8+40,395,50,8]
    pdf.addField(etiquetadora2)
	var etiquetadora3 = new AcroFormTextField()
    etiquetadora3.fieldName = 'etiquetadora3'
    etiquetadora3.Rect = [width*4/8+40,395,50,8]
    pdf.addField(etiquetadora3)
	var etiquetadora4 = new AcroFormTextField()
    etiquetadora4.fieldName = 'etiquetadora4'
    etiquetadora4.Rect = [width*5/8+40,395,50,8]
    pdf.addField(etiquetadora4)
	var etiquetadora5 = new AcroFormTextField()
    etiquetadora5.fieldName = 'etiquetadora5'
    etiquetadora5.Rect = [width*6/8+40,395,50,8]
    pdf.addField(etiquetadora5)

	var mesaInspeccion1 = new AcroFormTextField()
    mesaInspeccion1.fieldName = 'mesaInspeccion1'
    mesaInspeccion1.Rect = [width*2/8+40,407,50,8]
    pdf.addField(mesaInspeccion1)
	var mesaInspeccion2 = new AcroFormTextField()
    mesaInspeccion2.fieldName = 'mesaInspeccion2'
    mesaInspeccion2.Rect = [width*3/8+40,407,50,8]
    pdf.addField(mesaInspeccion2)
	var mesaInspeccion3 = new AcroFormTextField()
    mesaInspeccion3.fieldName = 'mesaInspeccion3'
    mesaInspeccion3.Rect = [width*4/8+40,407,50,8]
    pdf.addField(mesaInspeccion3)
	var mesaInspeccion4 = new AcroFormTextField()
    mesaInspeccion4.fieldName = 'mesaInspeccion4'
    mesaInspeccion4.Rect = [width*5/8+40,407,50,8]
    pdf.addField(mesaInspeccion4)
	var mesaInspeccion5 = new AcroFormTextField()
    mesaInspeccion5.fieldName = 'mesaInspeccion5'
    mesaInspeccion5.Rect = [width*6/8+40,407,50,8]
    pdf.addField(mesaInspeccion5)

	var recogiendo1 = new AcroFormTextField()
    recogiendo1.fieldName = 'recogiendo1'
    recogiendo1.Rect = [width*2/8+40,419,50,8]
    pdf.addField(recogiendo1)
	var recogiendo2 = new AcroFormTextField()
    recogiendo2.fieldName = 'recogiendo2'
    recogiendo2.Rect = [width*3/8+40,419,50,8]
    pdf.addField(recogiendo2)
	var recogiendo3 = new AcroFormTextField()
    recogiendo3.fieldName = 'recogiendo3'
    recogiendo3.Rect = [width*4/8+40,419,50,8]
    pdf.addField(recogiendo3)
	var recogiendo4 = new AcroFormTextField()
    recogiendo4.fieldName = 'recogiendo4'
    recogiendo4.Rect = [width*5/8+40,419,50,8]
    pdf.addField(recogiendo4)
	var recogiendo5 = new AcroFormTextField()
    recogiendo5.fieldName = 'recogiendo5'
    recogiendo5.Rect = [width*6/8+40,419,50,8]
    pdf.addField(recogiendo5)

	var estibando1 = new AcroFormTextField()
    estibando1.fieldName = 'estibando1'
    estibando1.Rect = [width*2/8+40,431,50,8]
    pdf.addField(estibando1)
	var estibando2 = new AcroFormTextField()
    estibando2.fieldName = 'estibando2'
    estibando2.Rect = [width*3/8+40,431,50,8]
    pdf.addField(estibando2)
	var estibando3 = new AcroFormTextField()
    estibando3.fieldName = 'estibando3'
    estibando3.Rect = [width*4/8+40,431,50,8]
    pdf.addField(estibando3)
	var estibando4 = new AcroFormTextField()
    estibando4.fieldName = 'estibando4'
    estibando4.Rect = [width*5/8+40,431,50,8]
    pdf.addField(estibando4)
	var estibando5 = new AcroFormTextField()
    estibando5.fieldName = 'estibando5'
    estibando5.Rect = [width*6/8+40,431,50,8]
    pdf.addField(estibando5)
	
	pdf.text('Observaciones:',20,460)
	var observaciones = new AcroFormTextField()
    observaciones.fieldName = 'observaciones'
    observaciones.Rect = [80,455,width-100,24]
    pdf.addField(observaciones)

    pdf.text('Inspector (a):',20,500)
	pdf.text('Aseguramiento de la Calidad',65,508)
	pdf.line(60,502,150,502)

    pdf.text('Verificado:',width/3+20,500,{align:'left'})
	pdf.text('Sup. de Aseguramiento de la Calidad',width/3+55,508)
	pdf.line(width/3+50,502,width/3+160,502)

    pdf.text('Informado:',width*2/3+30,500,{align:'left'})
	pdf.text('Operaciones',width*2/3+70,508)
	pdf.line(width*2/3+60,502,width*2/3+120,502)
    
	//uncheck checkboxes
	lineaTrasiego.appearanceState = 'Off'
	mangueras.appearanceState = 'Off'
	bombas.appearanceState = 'Off'
	filtros.appearanceState = 'Off'
	nivLlenado.appearanceState = 'Off'
	tapado.appearanceState = 'Off'
	etiquetado.appearanceState = 'Off'
	codificadoEnvase.appearanceState = 'Off'
	codificadoCajas.appearanceState = 'Off'
	dentroRango.appearanceState = 'Off'
	pruebaOrganoleptica.appearanceState = 'Off'
	frente_Autoad.appearanceState = 'Off'
	recetario_Autoad.appearanceState = 'Off'
	cuello_Autoad.appearanceState = 'Off'
	hombro_Autoad.appearanceState = 'Off'
	ovalo_Autoad.appearanceState = 'Off'
	strip_Autoad.appearanceState = 'Off'
	frente_ColaFria.appearanceState = 'Off'
	recetario_ColaFria.appearanceState = 'Off'
	cuello_ColaFria.appearanceState = 'Off'
	hombro_ColaFria.appearanceState = 'Off'
	ovalo_ColaFria.appearanceState = 'Off'
	strip_ColaFria.appearanceState = 'Off'
    g1.appearanceState = 'Off'
	g2.appearanceState = 'Off'
	g3.appearanceState = 'Off'
	g4.appearanceState = 'Off'
	g5.appearanceState = 'Off'
	ca1.appearanceState = 'Off'
	ca2.appearanceState = 'Off'
	ca3.appearanceState = 'Off'
	ca4.appearanceState = 'Off'
	ca5.appearanceState = 'Off'
	nr1.appearanceState = 'Off'
	nr2.appearanceState = 'Off'
	nr3.appearanceState = 'Off'
	nr4.appearanceState = 'Off'
	nr5.appearanceState = 'Off'
	op1.appearanceState = 'Off'
	op2.appearanceState = 'Off'
	op3.appearanceState = 'Off'
	op4.appearanceState = 'Off'
	op5.appearanceState = 'Off'
	e1.appearanceState = 'Off'
	e2.appearanceState = 'Off'
	e3.appearanceState = 'Off'
	e4.appearanceState = 'Off'
	e5.appearanceState = 'Off'
	l1.appearanceState = 'Off'
	l2.appearanceState = 'Off'
	l3.appearanceState = 'Off'
	l4.appearanceState = 'Off'
	l5.appearanceState = 'Off'

	/* guardar formulario */
    pdf.save('Formulario - InspeccionDeLinea.pdf')
  }

  return (
    <div className="App">
      <h2>Inspección de línea</h2>
      <button onClick={crear}>Generar PDF</button>
    </div>
  );
}

export default App;
