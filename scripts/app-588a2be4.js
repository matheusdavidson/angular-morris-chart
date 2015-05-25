/**
 * angular morris chart provides morris.js wrappers directives for angular
 * based in ngmorris from Connor James Leech
 *
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";!function(){angular.module("angular.morris-chart",[])}(),function(){angular.module("angular.morris-chart").directive("areaChart",function(){return{restrict:"A",scope:{areaData:"=",areaXkey:"@",areaYkeys:"=",areaLabels:"=",lineColors:"="},link:function(a,e){a.$watch("areaData",function(){a.areaData&&("string"==typeof a.areaData&&(a.areaData=JSON.parse(a.areaData)),"string"==typeof a.areaYkeys&&(a.areaYkeys=JSON.parse(a.areaYkeys)),"string"==typeof a.areaLabels&&(a.areaLabels=JSON.parse(a.areaLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.areaInstance?a.areaInstance.setData(a.areaData):a.areaInstance=new Morris.Area({element:e,data:a.areaData,xkey:a.areaXkey,ykeys:a.areaYkeys,labels:a.areaLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart").directive("barChart",function(){return{restrict:"A",scope:{barX:"@",barY:"=",barLabels:"=",barData:"=",barColors:"="},link:function(a,e){a.$watch("barData",function(){a.barData&&("string"==typeof a.barY&&(a.barY=JSON.parse(a.barY)),"string"==typeof a.barLabels&&(a.barLabels=JSON.parse(a.barLabels)),"string"==typeof a.barData&&(a.barData=JSON.parse(a.barData)),"string"==typeof a.barColors&&(a.barColors=JSON.parse(a.barColors)),a.barInstance?a.barInstance.setData(a.barData):a.barInstance=new Morris.Bar({element:e,data:a.barData,xkey:a.barX,ykeys:a.barY,labels:a.barLabels,barColors:a.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],xLabelMargin:2}))})}}})}(),function(){angular.module("angular.morris-chart").directive("donutChart",function(){return{restrict:"A",scope:{donutData:"=",donutColors:"="},link:function(a,e){a.$watch("donutData",function(){if(a.donutData)if("string"==typeof a.donutData&&(a.donutData=JSON.parse(a.donutData)),"string"==typeof a.donutColors&&(a.donutColors=JSON.parse(a.donutColors)),a.donutInstance)a.donutInstance.setData(a.donutData);else{var t={element:e,data:a.donutData,colors:a.donutColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]};a.donutInstance=new Morris.Donut(t)}})}}})}(),function(){angular.module("angular.morris-chart").directive("lineChart",function(){return{restrict:"A",scope:{lineData:"=",lineXkey:"@",lineYkeys:"=",lineLabels:"=",lineColors:"="},link:function(a,e){a.$watch("lineData",function(){a.lineData&&("string"==typeof a.lineData&&(a.lineData=JSON.parse(a.lineData)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineLabels&&(a.lineLabels=JSON.parse(a.lineLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.lineInstance?a.lineInstance.setData(a.lineData):a.lineInstance=new Morris.Line({element:e,data:a.lineData,xkey:a.lineXkey,ykeys:a.lineYkeys,labels:a.lineLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart").directive("lineChart",function(){return{restrict:"A",scope:{lineData:"=",lineXkey:"@",lineYkeys:"=",lineLabels:"=",lineColors:"="},link:function(a,e){a.$watch("lineData",function(){a.lineData&&("string"==typeof a.lineData&&(a.lineData=JSON.parse(a.lineData)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineLabels&&(a.lineLabels=JSON.parse(a.lineLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.lineInstance?a.lineInstance.setData(a.lineData):a.lineInstance=new Morris.Line({element:e,data:a.lineData,xkey:a.lineXkey,ykeys:a.lineYkeys,labels:a.lineLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart").directive("donutChart",function(){return{restrict:"A",scope:{donutData:"=",donutColors:"="},link:function(a,e){a.$watch("donutData",function(){if(a.donutData)if("string"==typeof a.donutData&&(a.donutData=JSON.parse(a.donutData)),"string"==typeof a.donutColors&&(a.donutColors=JSON.parse(a.donutColors)),a.donutInstance)a.donutInstance.setData(a.donutData);else{var t={element:e,data:a.donutData,colors:a.donutColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]};a.donutInstance=new Morris.Donut(t)}})}}})}(),function(){angular.module("angular.morris-chart").directive("barChart",function(){return{restrict:"A",scope:{barX:"@",barY:"=",barLabels:"=",barData:"=",barColors:"="},link:function(a,e){a.$watch("barData",function(){a.barData&&("string"==typeof a.barY&&(a.barY=JSON.parse(a.barY)),"string"==typeof a.barLabels&&(a.barLabels=JSON.parse(a.barLabels)),"string"==typeof a.barData&&(a.barData=JSON.parse(a.barData)),"string"==typeof a.barColors&&(a.barColors=JSON.parse(a.barColors)),a.barInstance?a.barInstance.setData(a.barData):a.barInstance=new Morris.Bar({element:e,data:a.barData,xkey:a.barX,ykeys:a.barY,labels:a.barLabels,barColors:a.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],xLabelMargin:2}))})}}})}(),function(){angular.module("angular.morris-chart").directive("areaChart",function(){return{restrict:"A",scope:{areaData:"=",areaXkey:"@",areaYkeys:"=",areaLabels:"=",lineColors:"="},link:function(a,e){a.$watch("areaData",function(){a.areaData&&("string"==typeof a.areaData&&(a.areaData=JSON.parse(a.areaData)),"string"==typeof a.areaYkeys&&(a.areaYkeys=JSON.parse(a.areaYkeys)),"string"==typeof a.areaLabels&&(a.areaLabels=JSON.parse(a.areaLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.areaInstance?a.areaInstance.setData(a.areaData):a.areaInstance=new Morris.Area({element:e,data:a.areaData,xkey:a.areaXkey,ykeys:a.areaYkeys,labels:a.areaLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),/**
 * angular morris chart provides morris.js wrappers directives for angular
 * based in ngmorris from Connor James Leech
 * 
 * check out documentation in http://angular-morris-chart.stpa.co
 *
 * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the “Software”), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function(){function a(a){a(function(){window.hljs&&$("pre code").each(function(a,e){window.hljs.highlightBlock(e)})},1e3)}angular.module("angular-morris-chart",["angular.morris-chart"]).controller("MorrisCtrl",["$timeout",a])}(),function(){angular.module("angular.morris-chart",[])}(),function(){angular.module("angular.morris-chart").directive("areaChart",function(){return{restrict:"A",scope:{areaData:"=",areaXkey:"@",areaYkeys:"=",areaLabels:"=",lineColors:"="},link:function(a,e){a.$watch("areaData",function(){a.areaData&&("string"==typeof a.areaData&&(a.areaData=JSON.parse(a.areaData)),"string"==typeof a.areaYkeys&&(a.areaYkeys=JSON.parse(a.areaYkeys)),"string"==typeof a.areaLabels&&(a.areaLabels=JSON.parse(a.areaLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.areaInstance?a.areaInstance.setData(a.areaData):a.areaInstance=new Morris.Area({element:e,data:a.areaData,xkey:a.areaXkey,ykeys:a.areaYkeys,labels:a.areaLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart").directive("barChart",function(){return{restrict:"A",scope:{barX:"@",barY:"=",barLabels:"=",barData:"=",barColors:"="},link:function(a,e){a.$watch("barData",function(){a.barData&&("string"==typeof a.barY&&(a.barY=JSON.parse(a.barY)),"string"==typeof a.barLabels&&(a.barLabels=JSON.parse(a.barLabels)),"string"==typeof a.barData&&(a.barData=JSON.parse(a.barData)),"string"==typeof a.barColors&&(a.barColors=JSON.parse(a.barColors)),a.barInstance?a.barInstance.setData(a.barData):a.barInstance=new Morris.Bar({element:e,data:a.barData,xkey:a.barX,ykeys:a.barY,labels:a.barLabels,barColors:a.barColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],xLabelMargin:2}))})}}})}(),function(){angular.module("angular.morris-chart").directive("donutChart",function(){return{restrict:"A",scope:{donutData:"=",donutColors:"="},link:function(a,e){a.$watch("donutData",function(){if(a.donutData)if("string"==typeof a.donutData&&(a.donutData=JSON.parse(a.donutData)),"string"==typeof a.donutColors&&(a.donutColors=JSON.parse(a.donutColors)),a.donutInstance)a.donutInstance.setData(a.donutData);else{var t={element:e,data:a.donutData,colors:a.donutColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]};a.donutInstance=new Morris.Donut(t)}})}}})}(),function(){angular.module("angular.morris-chart").directive("lineChart",function(){return{restrict:"A",scope:{lineData:"=",lineXkey:"@",lineYkeys:"=",lineLabels:"=",lineColors:"="},link:function(a,e){a.$watch("lineData",function(){a.lineData&&("string"==typeof a.lineData&&(a.lineData=JSON.parse(a.lineData)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineYkeys&&(a.lineYkeys=JSON.parse(a.lineYkeys)),"string"==typeof a.lineLabels&&(a.lineLabels=JSON.parse(a.lineLabels)),"string"==typeof a.lineColors&&(a.lineColors=JSON.parse(a.lineColors)),a.lineInstance?a.lineInstance.setData(a.lineData):a.lineInstance=new Morris.Line({element:e,data:a.lineData,xkey:a.lineXkey,ykeys:a.lineYkeys,labels:a.lineLabels,lineColors:a.lineColors||["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"]}))})}}})}(),function(){angular.module("angular.morris-chart",[])}(),angular.module("angular-morris-chart").run(["$templateCache",function(a){a.put("doc/index.html",'<!doctype html><html class="no-js" ng-app="angular-morris-chart" ng-controller="MorrisCtrl as vm"><head><base href="/"><meta charset="utf-8"><title>angular morris chart - wrapper directives of morris.js for angular</title><meta name="description" content="angular morris chart provides a wrapper directives of morris.js for angular 1.x"><meta name="viewport" content="width=device-width"><meta name="author" content="stpa.co"><meta name="robots" content="index, follow"><meta content="article" property="og:type"><meta content="angular morris chart - wrapper directives of morris.js for angular" property="og:title"><meta content="angular morris chart provides wrapper directives of morris.js for angular" property="og:description"><meta content="https://angular-morris-chart.stpa.co" property="og:url"><meta content="https://stpa.co/about/" property="article:author"><meta content="https://stpa.co/assets/images/stpa-symbol.png" property="og:image"><meta content="angularjs" property="article:section"><meta content="modal" property="article:tag"><meta content="angular.js" property="article:tag"><meta content="morris.js" property="article:tag"><meta content="chart" property="article:tag"><link rel="shortcut icon" href="https://stpa.co/assets/images/favicon.png"></head><body><a href="https://github.com/stewones/angular-morris-chart"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a><div class="container"><div class="row"><div class="col-md-12"><div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs"><ul class="nav tabs-vertical col-sm-3" role="tablist"><li class="text-center"><a href="http://stpa.co" class="logo"><img src="https://stpa.co/assets/images/stpa-symbol.png"></a><h1>angular morris chart</h1><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-star" data-count-href="/stewones/angular-morris-chart/stargazers" data-count-api="/repos/stewones/angular-morris-chart#stargazers_count">Star</a><p>@@include(\'./partials/intro.html\')</p></li><li><hr></li><li role="presentation"><a href="#install" id="install-tab" role="tab" data-toggle="tab" aria-controls="install" aria-expanded="true">Install</a></li><li role="presentation" class="active"><a href="#sample" role="tab" id="sample-tab" data-toggle="tab" aria-controls="sample" aria-expanded="false">Examples</a></li><li role="presentation"><a href="https://github.com/stewones/angular-morris-chart/releases" target="_blank" aria-controls="changelog" aria-expanded="false">Changelog</a></li><li><hr></li><li class="text-center copyright"><p>Open an <a href="https://github.com/stewones/angular-morris-chart/issues">issue</a> and make your <a href="https://github.com/stewones/angular-morris-chart/pulls">pull-request</a>.<br>Code licensed under MIT.</p></li><li class="gh"><a class="github-button" href="https://github.com/stewones" data-count-href="/stewones/followers" data-count-api="/users/stewones#followers">Follow me @GitHub</a></li></ul><div id="" class="tab-content col-sm-9"><div role="tabpanel" class="tab-pane fade" id="install" aria-labelledby="install-tab">@@include(\'./partials/readme.html\')</div><div role="tabpanel" class="tab-pane fade active in" id="sample" aria-labelledby="sample-tab">@@include(\'./partials/sample.html\')</div><br><ul class="social"><li style="width: 140px; text-align: left; height: 25px;"><iframe src="//www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fangular-morris-chart.stpa.co&amp;layout=button_count" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe></li><li style="width: 154px; margin-right: 12px;"><div class="g-plus" data-action="share" data-annotation="bubble" data-href="https://angular-morris-chart.stpa.co"></div></li><li style="margin-right: 12px;"><a href="https://twitter.com/share" class="twitter-share-button" data-hashtags="angularjs">Tweet</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-eye" data-count-href="/stewones/angular-morris-chart/watchers" data-count-api="/repos/stewones/angular-morris-chart#subscribers_count">Watch</a></li><li style="margin-right: 12px;"><a class="github-button" href="https://github.com/stewones/angular-morris-chart/issues" data-icon="octicon-issue-opened" data-count-api="/repos/stewones/angular-morris-chart#open_issues_count">Issue</a></li><li><a class="github-button" href="https://github.com/stewones/angular-morris-chart" data-icon="octicon-git-branch" data-count-href="/stewones/angular-morris-chart/network" data-count-api="/repos/stewones/angular-morris-chart#forks_count">Fork</a></li></ul></div></div></div></div></div><script src="https://apis.google.com/js/platform.js" async="" defer=""></script><script src="https://buttons.github.io/buttons.js" async="" defer="" id="github-bjs"></script><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></body></html>')}]);