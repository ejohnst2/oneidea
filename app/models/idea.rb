class Idea < ApplicationRecord
  validates :idea_content, length: { minimum: 20 }
end
