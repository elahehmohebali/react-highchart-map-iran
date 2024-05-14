import { ReactDOM} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from "highcharts/modules/map.src.js";
import proj4 from "proj4";
import mapDataIE from "./ir-all.geo.json";
// import dataSample from './dataSample'
highchartsMap(Highcharts);

const MapHseChart = () => {
  if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
  }

  const dataSample = {
	'statistics': {
		"آذربایجان غربی": {
			"critical": 1,
			"major": 60,
			"safe": 60,
			"unsafe": 60,
			"negativeScore": 60,
			"auditCount": 60
		},
		"اردبیل": {
			"critical": 7,
			"major": 4,
			"safe": 54,
			"unsafe": 9,
			"negativeScore": 34,
			"auditCount": 7
		},
		"آذربایجان شرقی": {
			"critical": 102,
			"major": 100,
			"safe": 5,
			"unsafe": 7,
			"negativeScore": 5,
			"auditCount": 102
		},
		"بوشهر": {
			"critical": 30,
			"major":5,
			"safe":100,
			"unsafe": 6,
			"negativeScore": 0,
			"auditCount": 50
		},
		"چهارمحال و بختیاری": {
			"critical": 40,
			"major": 100,
			"safe": 110,
			"unsafe": 11,
			"negativeScore": 0,
			"auditCount": 40
		},
		"اصفهان": {
			"critical": 7,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount":20
		},
		"فارس": {
			"critical": 3,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 10
		},
		"گیلان": {
			"critical": 2,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 20
		},
		"گلستان": {
			"critical": 15,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 20
		},
		"همدان": {
			"critical": 5,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 60
		},
		"هرمزگان": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 65
		},
		"ایلام": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 0
		},
		"کهگیلویه و بویراحمد": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 87
		},
		"کردستان": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 54
		},
		"خراسان رضوی": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 4
		},
		"کرمان": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 3
		},
		"کرمانشاه": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 24
		},
		"خوزستان": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 65
		},
		"لرستان": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 98
		},
		"مازندران": {
			"critical": 10,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 43
		},
		"مرکزی": {
			"critical": 30,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 78
		},
		"خراسان شمالی": {
			"critical": 40,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 46
		},
		"قم": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 56
		},
		"قزوین": {
			"critical": 0,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 78
		},
		"سیستان و بلوچستان": {
			"critical": 10,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 45
		},
		"خراسان جنوبی": {
			"critical": 30,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 79
		},
		"سمنان": {
			"critical": 250,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 400
		},
		"یزد": {
			"critical": 25,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 46
		},
		"زنجان": {
			"critical": 10,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 56
		},
		"تهران": {
			"critical": 54,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 45
		},
		"البرز": {
			"critical": 30,
			"major": 0,
			"safe": 0,
			"unsafe": 0,
			"negativeScore": 0,
			"auditCount": 56
		}
	},
	"totalAuditCount": 0,
	"totalSafe": 0,
	"totalUnsafe": 0
	}

  const mapProvinceName = (name) => {
    switch(name){
        case 'آذربایجان شرقی': return 'ir-ea';//
        case 'آذربایجان غربی': return 'ir-wa';//
        case 'اردبیل': return 'ir-ar';//
        case 'اصفهان': return 'ir-es';//
        case 'ایلام': return 'ir-il';//
        case 'بوشهر': return 'ir-bs';//
        case 'تهران': return 'ir-th';//
        case 'چهارمحال و بختیاری': return 'ir-cm';//
        case 'خوزستان': return 'ir-kz';//
        case 'زنجان': return 'ir-za';
        case 'سمنان': return 'ir-sm';
        case 'سیستان و بلوچستان': return 'ir-sb';
        case 'فارس': return 'ir-fa';//
        case 'کرمان': return 'ir-ke';//
        case 'کردستان': return 'ir-kd';//
        case 'کرمانشاه': return 'ir-bk';
        case 'کهگیلویه و بویراحمد': return 'ir-kb';//
        case 'گیلان': return 'ir-gi';//
        case 'لرستان': return 'ir-lo';
        case 'مازندران': return 'ir-mn';//
        case 'مرکزی': return 'ir-mk';//--
        case 'هرمزگان': return 'ir-hg';//
        case 'همدان': return 'ir-hd';//
        case 'یزد': return 'ir-ya';
        case 'قم': return 'ir-qm';//
        case 'گلستان': return 'ir-go';//
        case 'قزوین': return 'ir-qz';//
        case 'خراسان جنوبی': return 'ir-kj';
        case 'خراسان رضوی': return 'ir-kv';
        case 'خراسان شمالی': return 'ir-ks';//
        case 'البرز': return 'ir-al';//
    }
  };

  const selectColorFill = (perc)=> {
    if  (perc <= -1) return '#E3E3E3';
    if  (perc > -1 && perc <= 20) return '#89D328';
    if  (perc > 20 && perc <= 30)  return '#FCEF00';
    if  (perc > 30 && perc <= 40)  return '#FD6E05';
    if  (perc > 40)  return '#D30702';
  };

console.log(dataSample)
  	const data =[];
	for(let pn in dataSample?.statistics){
		let prov = dataSample?.statistics[pn];
		let hcKey = mapProvinceName(pn);
		let percent = 0;
		let color = '';
		if(typeof prov.critical == 'undefined') prov.critical = -1;
		if(typeof prov.unsafe == 'undefined') prov.unsafe = 0;
		if(typeof prov.safe == 'undefined') prov.safe = 0;
		if(typeof prov.auditCount == 'undefined') prov.auditCount = 1;
		percent = ((prov.critical >= 0 && prov.auditCount != 0 ) ? Number(((prov.critical / prov.auditCount ) * 100)) : -2);
		color = selectColorFill(percent)

		data.push({hcKey,pn, prov, percent, color });
	}
	const series = [
		{
			type: 'map',
			mapData: mapDataIE,
			joinBy: ['hc-key','hcKey'],
			keys: ['hcKey', 'name', 'percent','color'],
			data: data,
			cursor: 'pointer',
			states:{
				color:'{point.color}'
			},
			tooltip: {
				headerFormat: '',
				pointFormatter() {
					return '<span style="color:'+ this.color +'">\u25CF</span> ' + '<h4>' + this.pn + '</h4><br/>' +
					[
						['Critical :'+ this.prov.critical] +'<br/>' +
							// ['Major :'+ this.prov.major] + '<br/>' +
							// ['NegativeScore :'+ this.prov.negativeScore] + '<br/>' +
							['Safe :'+ this.prov.safe] + '<br/>' +
							['Unsafe :'+ this.prov.unsafe] + '<br/>'+
							['Total :'+ this.prov.auditCount] + '<br/>'
						]
					}
				},
				dataLabels: {
					enabled: false,
					// format: '{point.pn}',
					// color:'#000000',
				},
		},
	]
	const mapOptions = {
		chart:{
			width: 900,
			height: 900,
			align: 'right',
		},
		title: {
			text: ""
		},
		legend:{
			enabled:false,
		},
		mapNavigation: {
			enabled: true,
			buttonOptions: {
				verticalAlign: "bottom"
			}
		},
		series: series,
		
	}
	
  return (
	<div>
		<div style={{flexDirection : 'row', justifyContent:'center'}}>
			<HighchartsReact constructorType ={'mapChart'} highcharts={Highcharts} options={mapOptions}/>
		</div>
	</div>);
  }
  export default MapHseChart
