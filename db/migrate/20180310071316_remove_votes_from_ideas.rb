class RemoveVotesFromIdeas < ActiveRecord::Migration[5.1]
  def change
    remove_column :ideas, :votes
  end
end
