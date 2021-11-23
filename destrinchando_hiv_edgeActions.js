/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_avanca}", "click", function(sym, e) {
         sym.play();
         
         sym.$("Rectangle").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_volta}", "click", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'contaminacao'
   (function(symbolName) {   
   
   })("contaminacao");
   //Edge symbol end:'contaminacao'

   //=========================================================
   
   //Edge symbol: 'chimpa'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1000);

      });
      //Edge binding end

   })("chimpa");
   //Edge symbol end:'chimpa'

   //=========================================================
   
   //Edge symbol: 'linha03'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_alertaCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().$("epidemia_mundo").fadeIn(750);
         
         sym.getComposition().getStage().$("aids_uk").fadeOut(750);
         sym.getComposition().getStage().$("africa").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta3}", "click", function(sym, e) {
         sym.getComposition().getStage().$("aids_uk").fadeIn(750);
         
         sym.getComposition().getStage().$("infectados_1990").fadeOut(750);

      });
      //Edge binding end

   })("linha03");
   //Edge symbol end:'linha03'

   //=========================================================
   
   //Edge symbol: 'alerta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("alerta");
   //Edge symbol end:'alerta'

   //=========================================================
   
   //Edge symbol: 'infectados_1990'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_volta2Copy}", "click", function(sym, e) {
         sym.getComposition().getStage().$("brasil").fadeIn(750);
         
         sym.getComposition().getStage().$("infectados_1990").fadeOut(750);

      });
      //Edge binding end

   })("infectados_1990");
   //Edge symbol end:'infectados_1990'

   //=========================================================
   
   //Edge symbol: 'coquetel'
   (function(symbolName) {   
   
   })("coquetel");
   //Edge symbol end:'coquetel'

   //=========================================================
   
   //Edge symbol: 'linha04'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("linha04");
   //Edge symbol end:'linha04'

   //=========================================================
   
   //Edge symbol: 'aids_uk'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_avanca_}", "click", function(sym, e) {
         sym.getComposition().getStage().$("africa").fadeIn(750);
         
         sym.getComposition().getStage().$("aids_uk").fadeOut(750);
         
         
         
         
         

      });
      //Edge binding end

   })("aids_uk");
   //Edge symbol end:'aids_uk'

   //=========================================================
   
   //Edge symbol: 'inicio_epidemia'
   (function(symbolName) {   
   
   })("inicio_epidemia");
   //Edge symbol end:'inicio_epidemia'

   //=========================================================
   
   //Edge symbol: 'dor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here// play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("dor");
   //Edge symbol end:'dor'

   //=========================================================
   
   //Edge symbol: 'hemofilico'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("hemofilico");
   //Edge symbol end:'hemofilico'

   //=========================================================
   
   //Edge symbol: 'pingo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("pingo");
   //Edge symbol end:'pingo'

   //=========================================================
   
   //Edge symbol: 'mulheres'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_avanca_Copy3}", "click", function(sym, e) {
         sym.getComposition().getStage().$("norte").fadeIn(750);
         
         sym.getComposition().getStage().$("mulheres").fadeOut(750);

      });
      //Edge binding end

   })("mulheres");
   //Edge symbol end:'mulheres'

   //=========================================================
   
   //Edge symbol: 'linha05'
   (function(symbolName) {   
   
   })("linha05");
   //Edge symbol end:'linha05'

   //=========================================================
   
   //Edge symbol: 'linha06'
   (function(symbolName) {   
   
   })("linha06");
   //Edge symbol end:'linha06'

   //=========================================================
   
   //Edge symbol: 'africa'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_volta2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("aids_uk").fadeIn(750);
         
         sym.getComposition().getStage().$("africa").fadeOut(750);

      });
      //Edge binding end

   })("africa");
   //Edge symbol end:'africa'

   //=========================================================
   
   //Edge symbol: 'brasil'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_volta2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("epidemia_mundo").fadeIn(750);
         
         sym.getComposition().getStage().$("brasil").fadeOut(750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_avanca_Copy2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("infectados_1990").fadeIn(750);
         
         sym.getComposition().getStage().$("brasil").fadeOut(750);

      });
      //Edge binding end

   })("brasil");
   //Edge symbol end:'brasil'

   //=========================================================
   
   //Edge symbol: 'epidemia_mundo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_avanca_Copy}", "click", function(sym, e) {
         sym.getComposition().getStage().$("brasil").fadeIn(750);
         
         sym.getComposition().getStage().$("africa").fadeOut(750);
         sym.getComposition().getStage().$("aids_uk").fadeOut(750);
         sym.getComposition().getStage().$("epidemia_mundo").fadeOut(750);

      });
      //Edge binding end

   })("epidemia_mundo");
   //Edge symbol end:'epidemia_mundo'

   //=========================================================
   
   //Edge symbol: 'celula_base'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_alerta_1}", "click", function(sym, e) {
         sym.play();
         
         sym.getComposition().getStage().getSymbol("celula_base").$("item_defesas").fadeIn(750);
         sym.getComposition().getStage().getSymbol("celula_base").$("item_2").fadeIn(750);
         
         sym.getComposition().getStage().getSymbol("celula_base").$("alerta_1").fadeOut(750);
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         sym.getSymbol("virus_vazio").stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fechar}", "click", function(sym, e) {
         sym.play(0);
         
         sym.getSymbol("virus_vazio").play(0);
         sym.getSymbol("wire_capsula").play(0);
         sym.getSymbol("dna_virus_condensado").play(0);
         sym.getSymbol("dna_virus_condensado2").play(0);
         sym.getSymbol("copinho").play(0);
         sym.getSymbol("bolinhas").play(0);
         sym.getSymbol("capsula").play(0);
         
         sym.getComposition().getStage().getSymbol("celula_base").$("alerta_1").fadeIn(750);
         sym.getSymbol("item_2").$("alerta_2").fadeIn(750);
         sym.getSymbol("item_3a").$("alerta_3a").fadeIn(750);
         sym.getSymbol("item_4").$("alerta_4").fadeIn(750);
         sym.getSymbol("item_5").$("alerta_5").fadeIn(750);
         sym.getSymbol("item_6").$("alerta_6").fadeIn(750);
         sym.getSymbol("item_7").$("alerta_7").fadeIn(750);
         sym.getSymbol("item_8").$("alerta_8").fadeIn(750);
         sym.getSymbol("item_9").$("alerta_9").fadeIn(750);
         sym.getSymbol("item_10").$("alerta_10").fadeIn(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2296, function(sym, e) {
         //sym.stop();
         sym.getSymbol("capsula").stop();
         sym.getSymbol("bolinhas").stop();
         sym.getSymbol("dna_virus_condensado").stop();
         sym.getSymbol("dna_virus_condensado2").stop();
         sym.getSymbol("wire_capsula").stop();
         sym.getSymbol("copinho").stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3103, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5672, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7886, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_8}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("virus_vazio2").stop();
         
         sym.getSymbol("item_8").$("alerta_8").fadeOut(750);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_6}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_6").$("alerta_6").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_5}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_5").$("alerta_5").fadeOut(750);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_item_7}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_7").$("alerta_7").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_4}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_4").$("alerta_4").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_3a}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_3a").$("alerta_3a").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_9}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("virus_vazio2").play();
         
         sym.getSymbol("item_9").$("alerta_9").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_10}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_10").$("alerta_10").fadeOut(750);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9421, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_item_2}", "click", function(sym, e) {
         sym.play();
         
         sym.getSymbol("item_2").$("alerta_2").fadeOut(750);
         
         

      });
      //Edge binding end

   })("celula_base");
   //Edge symbol end:'celula_base'

   //=========================================================
   
   //Edge symbol: 'virus_vazio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(1500);
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

      

   })("virus_vazio");
   //Edge symbol end:'virus_vazio'

   //=========================================================
   
   //Edge symbol: 'linha01'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_alerta2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("celula_base").fadeIn(750);
         
         sym.getComposition().getStage().$("contaminacao").fadeOut(750);
         sym.getComposition().getStage().$("linha01").fadeOut(750);
         sym.getComposition().getStage().$("Rectangle").fadeOut(750);
         sym.getComposition().getStage().$("avanca").fadeOut(750);
         sym.getComposition().getStage().getSymbol("celula_base").$("item_defesas").fadeOut(750);
         sym.getComposition().getStage().getSymbol("celula_base").$("item_2").fadeOut(750);
         

      });
      //Edge binding end

      

   })("linha01");
   //Edge symbol end:'linha01'

   //=========================================================
   
   //Edge symbol: 'fechar'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_fechar}", "click", function(sym, e) {
         sym.getComposition().getStage().$("contaminacao").fadeIn(50);
         sym.getComposition().getStage().$("linha01").fadeIn(50);
         sym.getComposition().getStage().$("avanca").fadeIn(50);
         
         sym.getComposition().getStage().$("celula_base").fadeOut(750);
         
         
         
         
         
         

      });
      //Edge binding end

   })("fechar");
   //Edge symbol end:'fechar'

   //=========================================================
   
   //Edge symbol: 'conector'
   (function(symbolName) {   
   
   })("conector");
   //Edge symbol end:'conector'

   //=========================================================
   
   //Edge symbol: 'wire_capsula'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);

      });
      //Edge binding end

   })("wire_capsula");
   //Edge symbol end:'wire_capsula'

   //=========================================================
   
   //Edge symbol: 'dna_virus_condensado2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);

      });
      //Edge binding end

   })("dna_virus_condensado2");
   //Edge symbol end:'dna_virus_condensado2'

   //=========================================================
   
   //Edge symbol: 'dna_virus_condensado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);

      });
      //Edge binding end

   })("dna_virus_condensado");
   //Edge symbol end:'dna_virus_condensado'

   //=========================================================
   
   //Edge symbol: 'bolinhas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);
         

      });
      //Edge binding end

   })("bolinhas");
   //Edge symbol end:'bolinhas'

   //=========================================================
   
   //Edge symbol: 'capsula'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);
         
         

      });
      //Edge binding end

   })("capsula");
   //Edge symbol end:'capsula'

   //=========================================================
   
   //Edge symbol: 'item_3'
   (function(symbolName) {   
   
   })("item_3");
   //Edge symbol end:'item_3'

   //=========================================================
   
   //Edge symbol: 'nucleo_celula'
   (function(symbolName) {   
   
   })("nucleo_celula");
   //Edge symbol end:'nucleo_celula'

   //=========================================================
   
   //Edge symbol: 'item_5'
   (function(symbolName) {   
   
   })("item_5");
   //Edge symbol end:'item_5'

   //=========================================================
   
   //Edge symbol: 'item_7'
   (function(symbolName) {   
   
   })("item_7");
   //Edge symbol end:'item_7'

   //=========================================================
   
   //Edge symbol: 'copinho'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop(1500);
         sym.play(0);

      });
      //Edge binding end

   })("copinho");
   //Edge symbol end:'copinho'

   //=========================================================
   
   //Edge symbol: 'dna_viral'
   (function(symbolName) {   
   
   })("dna_viral");
   //Edge symbol end:'dna_viral'

   //=========================================================
   
   //Edge symbol: 'item_8'
   (function(symbolName) {   
   
   })("item_8");
   //Edge symbol end:'item_8'

   //=========================================================
   
   //Edge symbol: 'item_6'
   (function(symbolName) {   
   
   })("item_6");
   //Edge symbol end:'item_6'

   //=========================================================
   
   //Edge symbol: 'intem_4'
   (function(symbolName) {   
   
   })("intem_4");
   //Edge symbol end:'intem_4'

   //=========================================================
   
   //Edge symbol: 'item_3a'
   (function(symbolName) {   
   
   })("item_3a");
   //Edge symbol end:'item_3a'

   //=========================================================
   
   //Edge symbol: 'item_9'
   (function(symbolName) {   
   
   })("item_9");
   //Edge symbol end:'item_9'

   //=========================================================
   
   //Edge symbol: 'item_10'
   (function(symbolName) {   
   
   })("item_10");
   //Edge symbol end:'item_10'

   //=========================================================
   
   //Edge symbol: 'abertura'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_comecar}", "click", function(sym, e) {
         sym.getComposition().getStage().$("abertura").fadeOut(750);
         
         sym.play();
         

      });
      //Edge binding end

   })("abertura");
   //Edge symbol end:'abertura'

   //=========================================================
   
   //Edge symbol: 'virus_gigante'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("virus_gigante");
   //Edge symbol end:'virus_gigante'

   //=========================================================
   
   //Edge symbol: 'sprite_campones'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(500);

      });
      //Edge binding end

   })("sprite_campones");
   //Edge symbol end:'sprite_campones'

   //=========================================================
   
   //Edge symbol: 'sprite_viajante'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(500);

      });
      //Edge binding end

   })("sprite_viajante");
   //Edge symbol end:'sprite_viajante'

   //=========================================================
   
   //Edge symbol: 'volta'
   (function(symbolName) {   
   
   })("volta");
   //Edge symbol end:'volta'

   //=========================================================
   
   //Edge symbol: 'norte'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_volta2}", "click", function(sym, e) {
         sym.getComposition().getStage().$("mulheres").fadeIn(750);
         
         sym.getComposition().getStage().$("norte").fadeOut(750);

      });
      //Edge binding end

   })("norte");
   //Edge symbol end:'norte'

   //=========================================================
   
   //Edge symbol: 'item_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_alerta_2}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("item_2");
   //Edge symbol end:'item_2'

})(jQuery, AdobeEdge, "EDGE-21754835");
