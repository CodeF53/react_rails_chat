class RoomsController < ApplicationController
  def index
    render json: Room.all
  end

  def create
    room = Room.create!(room_params)
    render json: room, status: :created
  end

  private

  def room_params
    params.permit(:name)
  end
end
