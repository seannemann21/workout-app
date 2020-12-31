class CreateSets < ActiveRecord::Migration[6.0]
  def change
    create_table :sets do |t|
      t.integer :exercise_id
      t.integer :reps
      t.integer :lbs
      t.integer :duration
    end
  end
end
