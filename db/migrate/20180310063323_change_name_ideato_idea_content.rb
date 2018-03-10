class ChangeNameIdeatoIdeaContent < ActiveRecord::Migration[5.1]
  def change
     rename_column :ideas, :idea, :idea_content
  end
end
