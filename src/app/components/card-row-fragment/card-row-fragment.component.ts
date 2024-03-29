import { Component, OnInit } from '@angular/core';
import {Movie, MovieCard} from '../../models';
import {XtreamCodeAPIService, ShareService} from '../../services';
import jQuery from 'jquery';

declare var $: any;
@Component({
  selector: 'app-card-row-fragment',
  templateUrl: './card-row-fragment.component.html',
  styleUrls: ['./card-row-fragment.component.css']
})
export class CardRowFragmentComponent implements OnInit {

  totalMovies: Object = {};
  totalMovieCards: Object = {}

  totalMovieCardArray = [];

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    (function ($){
      $(document).ready(
        function(){
          // Set the position of the cards...92

          $('.genre_sliders').each(function(){
            console.log("This is the function of the slider movies")
            var slider_genre_name  = $(this).parent().attr('id')
            var slider_genre_card_size = $(`#${slider_genre_name} .movie_card`).length
            $(`#${slider_genre_name} .movie_card`).each(function (index){
              if (slider_genre_card_size > 7){
                if(index != slider_genre_card_size - 1){
                  var left_pos = index * 294 + 233
                  $(this).css('left', left_pos.toString()+'px')
                } else {
                  $(this).css('left', '-71px')
                }
              } else {
                var left_pos = index * 294 + 233
                $(this).css('left', left_pos.toString()+'px')
              }

            })
          })

          // Click of the next and prev button
          var slider_next_btn = $('.next_arrow');
          slider_next_btn.click(function (){
            // Get the grand parent element.
            var slider_genre_name = $('.movie_card').parent().parent().attr('id');

            $(`#${slider_genre_name} .movie_card`).each(function(){
              var this_left = $(this).position().left - 294;
              $(this).animate({left: this_left.toString()+'px'})
            })
          })

          var slider_prev_btn = $('.prev_arrow');
          slider_prev_btn.click(function (){
            var slider_genre_name = $('.movie_card').parent().parent().attr('id');
            $(`#${slider_genre_name} .movie_card`).each(function(){
              var this_right = $(this).position().left + 294;
              $(this).animate({left: this_right.toString()+'px'})
            })
          })
        }
      )
    })(jQuery);

    this.shareService.sortMovies()
    this.totalMovies = this.shareService.sortedMovies;

    var tempTotalMovieCards = this.shareService.sortedMovieCards;
    var tempTotalMovieCardArray = []
    Object.keys(tempTotalMovieCards).map(function(categoryTitle){
      var tempObject = {
        "categoryTitle": categoryTitle,
        "categoryMovies": tempTotalMovieCards[categoryTitle]
      }
      tempTotalMovieCardArray.push(tempObject)
    })
    this.totalMovieCardArray = tempTotalMovieCardArray;
  }
}
