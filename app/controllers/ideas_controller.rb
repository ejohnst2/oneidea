class IdeasController < ApplicationController
  def new
    @idea = Idea.new
  end

   def index
    @ideas = Idea.all
  end

  def create
    @idea = Idea.new(idea_params)
    @idea.save
    redirect_to root_path
  end

  def find
    @idea = Idea.new
  end

  def show
  end

private

  def idea_params
    params.require(:idea).permit(:idea_content)
  end

end
