function base64Encode(a){var e;return e=encodeURIComponent(a),e=unescape(e),e=window.btoa(e)}function ajaxObject(){var a;try{a=new XMLHttpRequest}catch(e){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return sweetAlert("糟糕","你的浏览器不能上传文件","error"),!1}}}return a}const loadMarkdown=a=>{mdeditor.value="加载中。。。",fetch(a,{method:"GET"}).then((a=>Promise.all([a.ok,a.status,a.text(),a.headers]))).then((([a,e,t,n])=>{if(a)return{ok:a,status:e,data:t,headers:n};throw new Error(JSON.stringify(json.error))})).then((a=>{mdeditor.value=a.data})).catch((a=>{mdeditor.value=""}))};choo.disabled=!0;var ctJson="/hpp/admin/api/getlist";function getdoc(){choo.disabled=!0,mdeditor.disabled=!0,url="/hpp/admin/api/getdoc/"+choo.value+"?_"+Date.now(new Date),loadMarkdown(url),choo.disabled=!1,mdeditor.disabled=!1}function hpp_uploadmarkdown(){choo.disabled=!0,mdeditor.disabled=!0;var a=ajaxObject();a.open("post","/hpp/admin/api/adddoc/"+choo.value,!0),a.setRequestHeader("Content-Type","text/plain"),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?(sweetAlert("成功","文件已上传","success"),choo.disabled=!1,mdeditor.disabled=!1):201==a.status?(sweetAlert("成功","文件已新建","success"),choo.disabled=!1,mdeditor.disabled=!1):(sweetAlert("糟糕","上传文件失败!","error"),choo.disabled=!1,mdeditor.disabled=!1))},a.send(base64Encode(mdeditor.value))}$.getJSON(ctJson,(function(a){$.each(a,(function(a,e){$("#choo").append(`\n\t\t\t\t  <option>${e.name}</option>\n                `)})),console.log("get!"),$("#choo").editableSelect(),choo.value="选择一个文件或直接新增一个文件",choo.disabled=!1})),$((function(){$("#mdeditor").markdown({language:"zh"})})),$("#chooimage").editableSelect();var input=document.getElementById("input");function readFile(){var a=this.files[0],e=new FileReader;e.readAsDataURL(a),e.onloadstart=function(a){console.log("开始了")},e.onprogress=function(a){},e.onload=function(a){console.log(this.result.substring(this.result.indexOf(",")+1)),hpp_uploadimage(this.result.substring(this.result.indexOf(",")+1))},e.onloadend=function(a){console.log("结束了")}}function hpp_uploadimage(a){input.disabled=!0;var e=ajaxObject();e.open("post","/hpp/admin/api/addimage/"+chooimage.value,!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status)sweetAlert("成功","图片已上传","success"),input.disabled=!1;else if(201==e.status){const a=e.responseText;swal({title:"成功",text:"图片已新建,请复制地址",icon:"success",content:{element:"input",attributes:{value:a,type:"text"}}}),copyToClip(a),input.disabled=!1}else sweetAlert("糟糕","上传图片失败!","error"),input.disabled=!1},e.send(a)}function copyToClip(a){var e=document.createElement("input");e.setAttribute("value",a),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),swal("已复制",a,"success")}input.addEventListener("change",readFile,!1),$("#uptea").click((function(){$("#input").click()})),getCDNinfo=function(){$.ajax({url:"https://cdn.cyfan.top/cdn-cgi/trace",success:function(a,e){let t="Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, MZ - (MPM);Mombasa, Kenya - (MBA);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Cebu, Philippines - (CEB);Chengdu, China - (CTU);Chennai, India - (MAA);Chittagong, Bangladesh - (CGP);Chongqing, China - (CKG);Colombo, Sri Lanka - (CMB);Dhaka, Bangladesh - (DAC);Dongguan, China - (SZX);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Hangzhou, China - (HGH);Hanoi, Vietnam - (HAN);Hengyang, China - (HNY);Ho Chi Minh City, Vietnam - (SGN);Hong Kong - (HKG);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jinan, China - (TNA);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Kolkata, India - (CCU);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (NAY);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Nanning, China - (NNG);New Delhi, India - (DEL);Osaka, Japan - (KIX);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shenyang, China - (SHE);Shijiazhuang, China - (SJW);Singapore, Singapore - (SIN);Suzhou, China - (SZV);Taipei - (TPE);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuhan, China - (WUH);Wuxi, China - (WUX);Xi'an, China - (XIY);Yerevan, Armenia - (EVN);Zhengzhou, China - (CGO);Zuzhou, China - (CSX);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Thessaloniki, Greece - (SKG);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Bogotá, Colombia - (BOG);Buenos Aires, Argentina - (EZE);Curitiba, Brazil - (CWB);Fortaleza, Brazil - (FOR);Guatemala City, Guatemala - (GUA);Lima, Peru - (LIM);Medellín, Colombia - (MDE);Panama City, Panama - (PTY);Porto Alegre, Brazil - (POA);Quito, Ecuador - (UIO);Rio de Janeiro, Brazil - (GIG);São Paulo, Brazil - (GRU);Santiago, Chile - (SCL);Willemstad, Curaçao - (CUR);St. George's, Grenada - (GND);Amman, Jordan - (AMM);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Beirut, Lebanon - (BEY);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Port-Au-Prince, Haiti - (PAP);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, Virginia - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Tallahassee, FL, United States - (TLH);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Melbourne, VIC, Australia - (MEL);Noumea, New caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";"),n=a.split("colo=")[1].split("\n")[0];for(var i=0;i<t.length;i++)if(-1!=t[i].indexOf(n)){document.getElementById("cdn").innerHTML=t[i],document.getElementById("ip").innerHTML=a.split("ip=")[1].split("\n")[0],document.getElementById("httpos").innerHTML=a.split("visit_scheme=")[1].split("\n")[0],document.getElementById("uag").innerHTML=a.split("uag=")[1].split("\n")[0],document.getElementById("http").innerHTML=a.split("http=")[1].split("\n")[0],document.getElementById("loc").innerHTML=a.split("loc=")[1].split("\n")[0],document.getElementById("tls").innerHTML=a.split("tls=")[1].split("\n")[0],document.getElementById("warp").innerHTML=a.split("warp=")[1].split("\n")[0];break}}})},$(document).ready((function(){getCDNinfo()}));