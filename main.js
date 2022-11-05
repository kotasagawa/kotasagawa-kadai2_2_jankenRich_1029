

function R_Click(p_janken_r) {//R_Click()がクリックされたときの処理

        let janken = ['グー', 'チョキ', 'パー']; //jankenリストを作る　グーは０=janken[0]、チョキは１=janken[1]、パーは２=janken[2]
        let janken_r = Math.floor( Math.random() * 3);//Math.random()で乱数を作る

        let p_janken =  ['グー', 'チョキ', 'パー']; //プレイヤーのじゃんけんリスト

        let fdin_cont = '<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">';

        //じゃんけんの処理 
                //宝箱Aの処理 
            if (p_janken_r === 0 && p_janken_r - janken_r === 0) {
              Result_end = "当たり！1つゲットした";
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
          } else if(p_janken_r === 0 && p_janken_r - janken_r === -1) {
              Result_end = "大当たり! 3つゲットした"; 
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
          } else if(p_janken_r === 0 && p_janken_r - janken_r === -2) {
              Result_end = " はずれ！３つ減った…";
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              //宝箱Bの処理
          } else if(p_janken_r === 1 && p_janken_r - janken_r === 1) {
              Result_end = "はずれ！1つ減った…"; 
              //クラス名tsuikaの最後の要素を1秒間フェードアウトさせたら消す
              if($('.tsuika').length) {
                $('.tsuika:last').fadeOut(1000).queue(function(){
                  this.remove()
                });
              }
              
          } else if(p_janken_r === 1 && p_janken_r - janken_r === 0) {
              Result_end = "当たり！1つゲットした";

              //ドラゴンボールをSpaceに追加して、ハイドさせて1秒でフェードイン
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              // $('#space').append('<img src="img/dragonball.png" class="tsuika fade" style="margin-right: 10px" alt="ドラゴンボール">');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
          } else if(p_janken_r === 1 && p_janken_r - janken_r === -1) {
              Result_end = "大当たり！2つゲットした";
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
               //宝箱Cの処理
          } else if(p_janken_r === 2 && p_janken_r - janken_r === 2) {
              Result_end = "大当たり！５つゲットした";
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
          } else if(p_janken_r === 2 && p_janken_r - janken_r === 1) {
              Result_end = "はずれ！５つ減った…"; 
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
              if($('.tsuika').length) {
                $('.tsuika:last').remove();
              }
          } else if(p_janken_r === 2 && p_janken_r - janken_r === 0) {
            Result_end = "当たり！1つゲットした";
            $(fdin_cont).appendTo('#space').hide().fadeIn(1000);
            // $('#space').append('<img src="img/dragonball.png" class="tsuika" style="margin-right: 10px" alt="ドラゴンボール">');
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          }

          //spaceの画像の数をカウントして、countタグの部分に表示
          let counttsuika = $("#space").children().length;;
          $('#count').text(counttsuika);
  
          //id=pc_handsのテキストを書き換えて、相手の手札を表示
          $('#pc_hands').text("コンピューター：" + janken[janken_r]); 
          $('#hyouji').text(Result_end); //テキストを書き換える

          //画像が10以上になったら表示させる
            if(counttsuika >= 1 && counttsuika < 10) {
             $('#saigo').text('まだまだじゃ！');
            } else if (counttsuika === 0) {
              $('#saigo').text('もうおしまいじゃ！');
              $('#mainvisual').prepend('<img id="gameover" src="img/gameover.png" alt=""></img>');
            } else if(counttsuika >= 10 && counttsuika < 15) {
             $('#saigo').text('もうちょっとじゃ！');
            } else if(counttsuika >= 15 && counttsuika < 20) {
              $('#saigo').text('あとすこしじゃ！');
            } else if(counttsuika >= 20) {
              $('#saigo').text('よくやったな！');
              $('#mainvisual').prepend('<img id="congrats" src="img/shenron.png" alt=""></img>');
              

              //紙吹雪
              var end = Date.now() + (15 * 1000);

              // go Buckeyes!
              var colors = ['#bb0000', '#ffffff'];

              (function frame() {
                confetti({
                  particleCount: 2,
                  angle: 60,
                  spread: 55,
                  origin: { x: 0 },
                  colors: colors
                });
                confetti({
                  particleCount: 2,
                  angle: 120,
                  spread: 55,
                  origin: { x: 1 },
                  colors: colors
                });

                if (Date.now() < end) {
                  requestAnimationFrame(frame);
                }
              }());
            }
          };

          //宝箱Aをクリックしたら画像変更（開いてる宝箱）、1秒後に画像を戻す
          $('#gu_btn').on('click', function(){
          $('#gu_btn').attr('src', 'img/treasure2.png');
          setTimeout(function(){
            $('#gu_btn').attr('src', 'img/treasure1.png');
          },1000);
        });

        //宝箱Bをクリックしたら画像変更（開いてる宝箱）、1秒後に画像を戻す
        $('#cho_btn').on('click', function(){
          $('#cho_btn').attr('src', 'img/treasure2.png');
          setTimeout(function(){
            $('#cho_btn').attr('src', 'img/treasure1.png');
          },1000);
        });

         //宝箱Cをクリックしたら画像変更（開いてる宝箱）、1秒後に画像を戻す
         $('#par_btn').on('click', function(){
          $('#par_btn').attr('src', 'img/treasure2.png');
          setTimeout(function(){
            $('#par_btn').attr('src', 'img/treasure1.png');
          },1000);
        });



