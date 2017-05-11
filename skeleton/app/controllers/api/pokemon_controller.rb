class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render json: @pokemon
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render json: @pokemon
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :id, :attack, :defense, :poke_type, :moves)
  end
end
