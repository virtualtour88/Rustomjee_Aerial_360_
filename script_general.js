(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"start":"this.playAudioList([this.audio_B1277D8C_BB91_F28B_41DB_15C35F0D0D46], true); this.init(); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.Button_A68C1201_BA54_F03B_4187_17E94357DF85.trigger('click');self.Button_B0DCA9DA_BD6F_11C6_41E1_2B539B5DE7E7.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","minWidth":20,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"desktopMipmappingEnabled":false,"scrollBarWidth":10,"shadow":false,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","borderRadius":0,"gap":10,"overflow":"hidden","propagateClick":false,"vrPolyfillScale":0.75,"width":"100%","definitions": [{"timeToIdle":5000,"automaticZoomSpeed":10,"idleSequence":"this.sequence_B5C17D68_BBBF_2CDD_41E6_74A19474D545","initialPosition":{"yaw":-177.26,"class":"PanoramaCameraPosition","pitch":0.18},"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_B5C17D68_BBBF_2CDD_41E6_74A19474D545","id":"panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_camera"},{"minWidth":1,"data":{"name":"Menu bar"},"backgroundOpacity":0,"width":"17.769%","borderRadius":0,"visible":false,"url":"skin/Image_92DA1BC5_BBEC_103B_41BF_A2E21D15D704.png","propagateClick":false,"paddingTop":0,"id":"Image_92DA1BC5_BBEC_103B_41BF_A2E21D15D704","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"paddingLeft":0,"bottom":"2.08%","height":"7.375%","verticalAlign":"middle","toolTipHorizontalAlign":"center","class":"Image","left":"0.61%","minHeight":1,"shadow":false,"borderSize":0,"scaleMode":"fit_inside"},{"class":"PlayList","items":["this.PanoramaPlayListItem_AB00DE1B_BD61_1246_41E4_BAEEFB7511E2"],"id":"playList_AB045D7F_BD61_16BE_41DF_54FFD54A03F2"},{"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"toolTipShadowSpread":0,"toolTipFontWeight":"normal","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadShadowBlurRadius":3,"displayTooltipInSurfaceSelection":true,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingTop":5,"propagateClick":false,"translationTransitionDuration":1000,"width":"100%","data":{"name":"Main Viewer"},"subtitlesPaddingRight":5,"progressBorderRadius":0,"paddingLeft":0,"toolTipPaddingBottom":4,"subtitlesTop":0,"subtitlesTextShadowBlurRadius":0,"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","progressLeft":0,"toolTipPaddingRight":6,"vrPointerSelectionTime":2000,"paddingRight":0,"playbackBarLeft":0,"id":"MainViewer","subtitlesFontWeight":"normal","playbackBarHeadHeight":15,"toolTipTextShadowBlurRadius":3,"toolTipShadowBlurRadius":3,"playbackBarRight":0,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"transitionDuration":500,"playbackBarProgressBorderRadius":0,"toolTipShadowColor":"#333333","subtitlesBackgroundColor":"#000000","height":"100%","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowOpacity":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","displayTooltipInTouchScreens":true,"vrPointerColor":"#FFFFFF","transitionMode":"blending","toolTipHorizontalAlign":"center","subtitlesTextShadowColor":"#000000","toolTipBorderRadius":3,"toolTipFontStyle":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","toolTipFontColor":"#606060","subtitlesHorizontalAlign":"center","borderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipShadowHorizontalLength":0,"minWidth":100,"minHeight":50,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","progressBackgroundColorRatios":[0],"subtitlesBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"borderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarHeadBorderSize":0,"paddingTop":0,"playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"progressRight":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","progressOpacity":1,"toolTipShadowVerticalLength":0,"paddingBottom":0,"subtitlesShadow":false,"doubleClickAction":"toggle_fullscreen","subtitlesTextDecoration":"none","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","progressBackgroundColorDirection":"vertical","subtitlesEnabled":true,"progressBarBackgroundColorRatios":[0],"playbackBarHeadOpacity":1,"subtitlesFontFamily":"Arial","toolTipDisplayTime":600,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.17,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"subtitlesPaddingBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#FFFFFF"],"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","subtitlesOpacity":1,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowVerticalLength":1,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderRadius":0,"playbackBarHeadWidth":6,"firstTransitionDuration":0,"progressHeight":10,"progressBarBorderRadius":0,"toolTipBorderSize":1,"subtitlesPaddingLeft":5,"progressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"toolTipPaddingTop":4,"playbackBarProgressOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarOpacity":1,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBottom":50,"shadow":false,"toolTipShadowOpacity":1,"subtitlesGap":0},{"minWidth":1,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"data":{"name":"WebFrame55044"},"shadow":false,"minHeight":1,"width":"100%","borderRadius":0,"url":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1283876840243!2d72.84783431490082!3d19.058091987098212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMTnCsDAzJzI5LjEiTiA3MsKwNTEnMDAuMSJF!5e0!3m2!1sen!2sin!4v1643777388041!5m2!1sen!2sin","propagateClick":false,"paddingTop":0,"paddingBottom":0,"id":"WebFrame_895E0BFD_BA55_F7CB_41C0_1E5E0085933A","insetBorder":false,"paddingRight":0,"paddingLeft":0,"height":"100%","backgroundColor":["#FFFFFF"],"top":"0%","toolTipHorizontalAlign":"center","class":"WebFrame","left":"0%","scrollEnabled":true,"backgroundOpacity":1,"borderSize":0},{"minWidth":1,"fontWeight":"normal","backgroundColorRatios":[0,1],"right":"1.59%","backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":250,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_A7D51A91_BA54_305B_41D2_FAF096209E1B","horizontalAlign":"center","paddingBottom":0,"shadowBlurRadius":6,"paddingRight":0,"paddingLeft":0,"iconWidth":"100%","data":{"name":"24 mtrs"},"iconHeight":"125%","bottom":"1.49%","buttonGroup":"menu","fontFamily":"Arial","height":100,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"pressedIconURL":"skin/Button_A7D51A91_BA54_305B_41D2_FAF096209E1B_rollover.png","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_A7D51A91_BA54_305B_41D2_FAF096209E1B.png","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","mode":"toggle","rollOverIconURL":"skin/Button_A7D51A91_BA54_305B_41D2_FAF096209E1B_rollover.png","click":"this.setPanoramaCameraWithSpot(this.playList_AB045D7F_BD61_16BE_41DF_54FFD54A03F2, this.PanoramaPlayListItem_AB00DE1B_BD61_1246_41E4_BAEEFB7511E2, 26.6079295154185, -1.4096916299559472, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_AB045D7F_BD61_16BE_41DF_54FFD54A03F2, 0, null, true)","layout":"vertical","class":"Button","pressedRollOverIconURL":"skin/Button_A7D51A91_BA54_305B_41D2_FAF096209E1B_rollover.png","minHeight":1,"fontStyle":"normal","iconBeforeLabel":true,"shadow":false,"borderSize":0},{"minWidth":1,"right":"1.28%","backgroundOpacity":0,"scrollBarWidth":10,"scrollBarVisible":"rollOver","scrollBarColor":"#000000","borderRadius":0,"visible":false,"gap":10,"overflow":"scroll","propagateClick":false,"width":"12.61%","paddingTop":0,"id":"Container_B4C165A7_BBF4_619C_41D1_A7DBC2C5F7C2","horizontalAlign":"left","paddingBottom":0,"data":{"name":"Height Bar"},"paddingRight":0,"paddingLeft":0,"bottom":"1.49%","height":"23.373%","verticalAlign":"top","scrollBarMargin":2,"layout":"absolute","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"Container","minHeight":1,"contentOpaque":false,"shadow":false,"borderSize":0},{"class":"FadeOutEffect","easing":"linear","duration":500,"id":"effect_8F64B636_BA74_1059_41DE_1ED92C5EDEA1"},{"minWidth":1,"fontWeight":"normal","backgroundColorRatios":[0,1],"right":"1.59%","backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":250,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_A6EDF3C9_BBAC_17CB_41CF_DD4F6C06A84D","horizontalAlign":"center","paddingBottom":0,"shadowBlurRadius":6,"paddingRight":0,"paddingLeft":0,"iconWidth":"100%","data":{"name":"48 mtrs"},"iconHeight":"125%","bottom":"8.16%","buttonGroup":"menu","fontFamily":"Arial","height":100,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"pressedIconURL":"skin/Button_A6EDF3C9_BBAC_17CB_41CF_DD4F6C06A84D_rollover.png","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_A6EDF3C9_BBAC_17CB_41CF_DD4F6C06A84D.png","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","mode":"toggle","rollOverIconURL":"skin/Button_A6EDF3C9_BBAC_17CB_41CF_DD4F6C06A84D_rollover.png","click":"this.setPanoramaCameraWithSpot(this.playList_AB046D7F_BD61_16BE_41CD_EC7223119158, this.PanoramaPlayListItem_AB00FE1B_BD61_1246_41E4_D9BFC1161A9F, -177.26872246696036, 0.1762114537444934, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_AB046D7F_BD61_16BE_41CD_EC7223119158, 0, null, true)","layout":"vertical","class":"Button","minHeight":1,"fontStyle":"normal","iconBeforeLabel":true,"shadow":false,"borderSize":0},{"minWidth":1,"shadow":false,"fontWeight":"normal","backgroundColorRatios":[0,1],"backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":70,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9","horizontalAlign":"center","paddingBottom":0,"shadowBlurRadius":6,"paddingRight":0,"paddingLeft":0,"iconWidth":60,"data":{"name":"Button9209"},"iconHeight":60,"fontFamily":"Arial","fontColor":"#FFFFFF","height":70,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"top":"0%","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9.png","toolTipHorizontalAlign":"center","mode":"toggle","rollOverIconURL":"skin/Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9_rollover.png","layout":"horizontal","class":"Button","pressedIconURL":"skin/Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9_rollover.png","minHeight":1,"right":"0%","fontStyle":"normal","iconBeforeLabel":true,"borderSize":0},{"timeToIdle":5000,"idleSequence":"this.sequence_8EB268CD_BABC_71CB_41C7_2530854BFADA","class":"PanoramaCamera","hoverFactor":0,"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","easing":"linear","duration":1000},{"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","duration":3000,"targetPitch":-0.69,"targetStereographicFactor":0}],"displayOriginPosition":{"hfov":165,"yaw":174.8,"class":"RotationalCameraDisplayPosition","pitch":-90,"stereographicFactor":1},"automaticZoomSpeed":10,"initialPosition":{"yaw":174.8,"class":"PanoramaCameraPosition","pitch":-0.69},"initialSequence":"this.sequence_8EB268CD_BABC_71CB_41C7_2530854BFADA","id":"panorama_835744B1_BABC_305B_41D8_778BF03809B5_camera"},{"class":"FadeInEffect","easing":"linear","duration":500,"id":"effect_AF84AA73_BD61_12C6_41DC_55EA3A82F1DF"},{"thumbnailUrl":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_t.jpg","label":trans('panorama_835744B1_BABC_305B_41D8_778BF03809B5.label'),"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_t.jpg","cube":{"levels":[{"width":43008,"rowCount":14,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/0/{row}_{column}.jpg","height":7168,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":84},{"width":21504,"rowCount":7,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/1/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":42},{"width":12288,"rowCount":4,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_835744B1_BABC_305B_41D8_778BF03809B5_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"vfov":180,"hfov":360,"data":{"label":"4"},"partial":false,"hfovMax":110,"pitch":0,"id":"panorama_835744B1_BABC_305B_41D8_778BF03809B5"},{"timeToIdle":5000,"automaticZoomSpeed":10,"idleSequence":"this.sequence_B599220E_BBBF_3455_41BC_E0A13381AA8D","initialPosition":{"yaw":26.61,"class":"PanoramaCameraPosition","pitch":-1.4},"class":"PanoramaCamera","hoverFactor":0,"initialSequence":"this.sequence_B599220E_BBBF_3455_41BC_E0A13381AA8D","id":"panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_camera"},{"minWidth":1,"backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"data":{"name":"Container8375"},"scrollBarWidth":10,"scrollBarVisible":"rollOver","width":267.15,"borderRadius":0,"gap":10,"overflow":"scroll","propagateClick":false,"scrollBarColor":"#000000","children":["this.Button_B0DCA9DA_BD6F_11C6_41E1_2B539B5DE7E7","this.Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9","this.Button_AD76DC81_BD61_3643_41E5_E45EF2684103","this.Button_ADCBD242_BD7F_32C1_4191_48D7AD0E50A4"],"paddingTop":0,"horizontalAlign":"left","paddingBottom":0,"id":"Container_B380EF74_BD67_32C2_41CA_92240700F566","paddingRight":0,"paddingLeft":0,"bottom":"3.69%","height":70.05,"backgroundColor":["#000000","#000000"],"scrollBarMargin":2,"layout":"absolute","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"Container","left":"2.99%","backgroundOpacity":0.3,"borderSize":0,"contentOpaque":false,"verticalAlign":"top","shadow":false,"minHeight":1},{"minWidth":1,"shadow":false,"fontWeight":"normal","backgroundColorRatios":[0,1],"shadowBlurRadius":6,"backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":70,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_AD76DC81_BD61_3643_41E5_E45EF2684103","horizontalAlign":"center","paddingBottom":0,"fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"iconWidth":60,"data":{"name":"Button10601"},"iconHeight":60,"fontColor":"#FFFFFF","height":70,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"top":"0%","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_AD76DC81_BD61_3643_41E5_E45EF2684103.png","toolTipHorizontalAlign":"center","mode":"push","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_AF84AA73_BD61_12C6_41DC_55EA3A82F1DF, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_AF854A73_BD61_12C6_41C7_4D7BAFDC48FB, 'hideEffect', false)}.bind(this); if(!this.Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A.get('visible')){ visibleFunc(this.Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A) } else { invisibleFunc(this.Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A) }","layout":"horizontal","class":"Button","left":"25%","minHeight":1,"fontStyle":"normal","iconBeforeLabel":true,"borderSize":0},{"minWidth":1,"shadow":false,"data":{"name":"Logo"},"backgroundOpacity":0,"width":"15.244%","borderRadius":0,"url":"skin/Image_B4E416FF_BA74_F1C7_41E1_BCC7D25C20E0.png","propagateClick":false,"paddingTop":0,"id":"Image_B4E416FF_BA74_F1C7_41E1_BCC7D25C20E0","horizontalAlign":"center","paddingBottom":0,"paddingRight":0,"paddingLeft":0,"height":"5.338%","verticalAlign":"middle","top":"2.04%","click":"this.openLink(this.translate('LinkBehaviour_B57364F8_BA54_31C9_41D1_726C355864DE.source'), '_blank')","toolTipHorizontalAlign":"center","class":"Image","left":"1.06%","minHeight":1,"borderSize":0,"scaleMode":"fit_inside"},{"minWidth":1,"shadow":false,"backgroundOpacity":0,"width":60,"borderRadius":0,"propagateClick":false,"cursor":"hand","paddingTop":0,"id":"IconButton_89D38D77_BA74_10C7_41E2_C0F165B3D24B","horizontalAlign":"center","paddingBottom":0,"data":{"name":"IconButton56608"},"paddingRight":0,"paddingLeft":0,"transparencyActive":true,"height":60,"verticalAlign":"middle","top":"0%","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_8F64B636_BA74_1059_41DE_1ED92C5EDEA1, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A)","iconURL":"skin/IconButton_89D38D77_BA74_10C7_41E2_C0F165B3D24B.jpg","toolTipHorizontalAlign":"center","mode":"push","class":"IconButton","minHeight":1,"right":"0%","borderSize":0},{"data":{"label":"Upbeat Pop Royalty Free Background Music - Party Time!"},"autoplay":true,"loop":false,"audio":{"mp3Url":"media/audio_B1277D8C_BB91_F28B_41DB_15C35F0D0D46.mp3","class":"AudioResource","oggUrl":"media/audio_B1277D8C_BB91_F28B_41DB_15C35F0D0D46.ogg"},"class":"MediaAudio","id":"audio_B1277D8C_BB91_F28B_41DB_15C35F0D0D46"},{"thumbnailUrl":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_t.jpg","label":trans('panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8.label'),"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_t.jpg","cube":{"levels":[{"width":43008,"rowCount":14,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/0/{row}_{column}.jpg","height":7168,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":84},{"width":21504,"rowCount":7,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/1/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":42},{"width":12288,"rowCount":4,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"vfov":180,"hfov":360,"data":{"label":"6"},"partial":false,"hfovMax":110,"pitch":0,"id":"panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8"},{"thumbnailUrl":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_t.jpg","label":trans('panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541.label'),"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_t.jpg","cube":{"levels":[{"width":43008,"rowCount":14,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/0/{row}_{column}.jpg","height":7168,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":84},{"width":21504,"rowCount":7,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/1/{row}_{column}.jpg","height":3584,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":42},{"width":12288,"rowCount":4,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/2/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/3/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/4/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}],"class":"ImageResource"}}],"vfov":180,"hfov":360,"data":{"label":"5"},"partial":false,"hfovMax":110,"pitch":0,"id":"panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541"},{"minWidth":1,"shadow":false,"fontWeight":"normal","backgroundColorRatios":[0,1],"backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":70,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_ADCBD242_BD7F_32C1_4191_48D7AD0E50A4","horizontalAlign":"center","paddingBottom":0,"shadowBlurRadius":6,"paddingRight":0,"paddingLeft":0,"iconWidth":60,"data":{"name":"Button11563"},"iconHeight":60,"fontFamily":"Arial","fontColor":"#FFFFFF","height":70,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"top":"0%","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_ADCBD242_BD7F_32C1_4191_48D7AD0E50A4.png","toolTipHorizontalAlign":"center","mode":"toggle","rollOverIconURL":"skin/Button_ADCBD242_BD7F_32C1_4191_48D7AD0E50A4_rollover.png","layout":"horizontal","class":"Button","minHeight":1,"right":"25%","fontStyle":"normal","iconBeforeLabel":true,"borderSize":0},{"minWidth":1,"fontWeight":"normal","backgroundColorRatios":[0,1],"shadowBlurRadius":6,"backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":70,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_B0DCA9DA_BD6F_11C6_41E1_2B539B5DE7E7","horizontalAlign":"center","paddingBottom":0,"fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"iconWidth":60,"data":{"name":"Button4690"},"iconHeight":60,"bottom":"0%","fontColor":"#FFFFFF","height":70,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_B0DCA9DA_BD6F_11C6_41E1_2B539B5DE7E7.png","toolTipHorizontalAlign":"center","mode":"push","rollOverIconURL":"skin/Button_B0DCA9DA_BD6F_11C6_41E1_2B539B5DE7E7.png","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AB008E1B_BD61_1246_41CD_659DC7C75262, 174.80176211453744, -0.7048458149779736, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","layout":"horizontal","class":"Button","left":"0%","minHeight":1,"fontStyle":"normal","iconBeforeLabel":true,"shadow":false,"borderSize":0},{"minWidth":1,"backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"right":"40.92%","scrollBarVisible":"rollOver","scrollBarWidth":10,"minHeight":1,"scrollBarColor":"#000000","borderRadius":0,"visible":false,"gap":10,"overflow":"scroll","propagateClick":false,"width":"18.078%","paddingTop":0,"horizontalAlign":"left","paddingBottom":0,"id":"Container_B5E15B6B_BBEC_A294_41D5_9D4242A5BC3A","data":{"name":"Menu Bar"},"paddingRight":0,"paddingLeft":0,"bottom":"3.14%","height":"6.277%","backgroundColor":["#FFFFFF","#FFFFFF"],"scrollBarMargin":2,"layout":"absolute","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"Container","verticalAlign":"top","backgroundOpacity":0.5,"contentOpaque":false,"shadow":false,"borderSize":0},{"minWidth":1,"backgroundColorDirection":"vertical","backgroundColorRatios":[0,0,1],"data":{"name":"Map main - low opacity"},"scrollBarVisible":"rollOver","scrollBarWidth":10,"shadow":false,"minHeight":1,"scrollBarColor":"#000000","borderRadius":0,"visible":false,"gap":10,"overflow":"scroll","propagateClick":false,"width":"100%","children":["this.Container_8AA53428_BA54_1049_41E6_9440F8D98319"],"paddingTop":0,"horizontalAlign":"left","paddingBottom":0,"id":"Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A","paddingRight":0,"paddingLeft":0,"height":"100%","backgroundColor":["#FFFFFF","#000000","#000000"],"scrollBarMargin":2,"top":"0%","layout":"absolute","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"Container","left":"0%","backgroundOpacity":0.5,"contentOpaque":false,"verticalAlign":"top","borderSize":0},{"class":"PlayList","items":["this.PanoramaPlayListItem_AB00FE1B_BD61_1246_41E4_D9BFC1161A9F"],"id":"playList_AB046D7F_BD61_16BE_41CD_EC7223119158"},{"minWidth":1,"backgroundColorDirection":"vertical","backgroundColorRatios":[0,1],"right":"3%","scrollBarVisible":"rollOver","scrollBarWidth":10,"minHeight":1,"scrollBarColor":"#000000","borderRadius":0,"gap":10,"overflow":"scroll","propagateClick":false,"width":"93.695%","children":["this.WebFrame_895E0BFD_BA55_F7CB_41C0_1E5E0085933A","this.IconButton_89D38D77_BA74_10C7_41E2_C0F165B3D24B"],"paddingTop":0,"horizontalAlign":"left","paddingBottom":0,"id":"Container_8AA53428_BA54_1049_41E6_9440F8D98319","data":{"name":"Container54781"},"paddingRight":0,"paddingLeft":0,"bottom":"6.98%","height":"83.451%","backgroundColor":["#FFFFFF","#FFFFFF"],"scrollBarMargin":2,"layout":"absolute","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"Container","verticalAlign":"top","backgroundOpacity":1,"contentOpaque":false,"shadow":false,"borderSize":0},{"minWidth":1,"fontWeight":"normal","backgroundColorRatios":[0,1],"right":"1.59%","backgroundOpacity":0,"backgroundColorDirection":"vertical","textDecoration":"none","width":250,"borderRadius":0,"shadowSpread":1,"propagateClick":false,"cursor":"hand","shadowColor":"#000000","paddingTop":0,"gap":5,"id":"Button_A68C1201_BA54_F03B_4187_17E94357DF85","horizontalAlign":"center","paddingBottom":0,"shadowBlurRadius":6,"paddingRight":0,"paddingLeft":0,"iconWidth":"100%","data":{"name":"72 mtrs"},"iconHeight":"125%","bottom":"14.75%","buttonGroup":"menu","fontFamily":"Arial","height":100,"verticalAlign":"middle","backgroundColor":["#000000","#000000"],"pressedIconURL":"skin/Button_A68C1201_BA54_F03B_4187_17E94357DF85_rollover.png","fontSize":"1.29vmin","borderColor":"#000000","iconURL":"skin/Button_A68C1201_BA54_F03B_4187_17E94357DF85.png","fontColor":"#FFFFFF","toolTipHorizontalAlign":"center","mode":"toggle","rollOverIconURL":"skin/Button_A68C1201_BA54_F03B_4187_17E94357DF85_rollover.png","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AB008E1B_BD61_1246_41CD_659DC7C75262, 174.80176211453744, -0.7048458149779736, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","layout":"vertical","class":"Button","pressedRollOverIconURL":"skin/Button_A68C1201_BA54_F03B_4187_17E94357DF85_rollover.png","minHeight":1,"fontStyle":"normal","iconBeforeLabel":true,"shadow":false,"borderSize":0},{"class":"FadeOutEffect","easing":"linear","duration":500,"id":"effect_AF854A73_BD61_12C6_41C7_4D7BAFDC48FB"},{"class":"PlayList","items":["this.PanoramaPlayListItem_AB008E1B_BD61_1246_41CD_659DC7C75262"],"id":"mainPlayList"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_B5C17D68_BBBF_2CDD_41E6_74A19474D545"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8_camera","media":"this.panorama_B3A6FB8C_BA54_7049_41E2_0290960DC3D8","id":"PanoramaPlayListItem_AB00DE1B_BD61_1246_41E4_BAEEFB7511E2"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_8EB268CD_BABC_71CB_41C7_2530854BFADA"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_B599220E_BBBF_3455_41BC_E0A13381AA8D"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541_camera","media":"this.panorama_B3A1FCF6_BA54_31D9_41B0_F3E00C4BC541","id":"PanoramaPlayListItem_AB00FE1B_BD61_1246_41E4_D9BFC1161A9F"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_835744B1_BABC_305B_41D8_778BF03809B5_camera","media":"this.panorama_835744B1_BABC_305B_41D8_778BF03809B5","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_AB008E1B_BD61_1246_41CD_659DC7C75262"}],"paddingTop":0,"buttonToggleMute":"this.Button_ADCBD242_BD7F_32C1_4191_48D7AD0E50A4","paddingLeft":0,"horizontalAlign":"left","paddingBottom":0,"mouseWheelEnabled":true,"paddingRight":0,"id":"rootPlayer","mobileMipmappingEnabled":false,"data":{"name":"Player11985","locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}},"height":"100%","defaultVRPointer":"laser","verticalAlign":"top","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"children":["this.MainViewer","this.Image_92DA1BC5_BBEC_103B_41BF_A2E21D15D704","this.Image_B4E416FF_BA74_F1C7_41E1_BCC7D25C20E0","this.Button_A6EDF3C9_BBAC_17CB_41CF_DD4F6C06A84D","this.Button_A7D51A91_BA54_305B_41D2_FAF096209E1B","this.Button_A68C1201_BA54_F03B_4187_17E94357DF85","this.Container_B4C165A7_BBF4_619C_41D1_A7DBC2C5F7C2","this.Container_8A6949EB_BA54_33CF_41C6_D2EC9DCCFD6A","this.Container_B5E15B6B_BBEC_A294_41D5_9D4242A5BC3A","this.Container_B380EF74_BD67_32C2_41CA_92240700F566"],"buttonToggleFullscreen":"this.Button_B2D7FD03_BD63_1646_41E1_5A4FFD7ADCF9","scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"translate":TDV.Tour.Script.translate,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isPanorama":TDV.Tour.Script.isPanorama,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"existsKey":TDV.Tour.Script.existsKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"registerKey":TDV.Tour.Script.registerKey,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initAnalytics":TDV.Tour.Script.initAnalytics,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentByName":TDV.Tour.Script.getComponentByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setValue":TDV.Tour.Script.setValue,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizStart":TDV.Tour.Script.quizStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"mixObject":TDV.Tour.Script.mixObject},"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"backgroundPreloadEnabled":true,"class":"Player","backgroundOpacity":1,"downloadEnabled":false,"layout":"absolute","mediaActivationMode":"window","borderSize":0,"contentOpaque":false,"minHeight":20};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.26.js.map
//Generated with v2021.2.26, Thu Feb 3 2022