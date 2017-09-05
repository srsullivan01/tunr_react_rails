class Api::SongsController < ApplicationController
  def index
    @artist = Artist.find(params[:artist_id])
    @songs = @artist.songs.all

    render json: @songs
  end

  def show
      @artist = Artist.find(params[:artist_id])
      @song = @artist.songs.find params[:id]

      render json: @songs
  end
  #
  # def create
  #   @songs = Song.new song_params
  #   if @song.save
  #     render json: @song
  #   else
  #     render json: {
  #       message: 'Error creating song'
  #     }
  #   end
  # end
  #
  # def update
  #   @song = Song.find params[:id]
  #   if @song.update(song_params)
  #     render json: @song
  #   else
  #     render json: {
  #       message: 'error updating song'
  #     }
  #   end
  # end
  #
  # def destroy
  #   @song = Song.find(params[:id])
  #   @song.destroy
  #   render json: {
  #     message: 'Song destroyed'
  #   }
  # end
  #
  # private
  #
  # def song_params
  #   params.require(:)
  # end

end
