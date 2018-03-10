class CreateIdeas < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas do |t|
      t.string :idea
      t.integer :votes

      t.timestamps
    end
  end
end
