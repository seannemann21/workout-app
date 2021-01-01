class CreateStrengthSets < ActiveRecord::Migration[6.0]
  def change
    create_table :strength_sets do |t|
      t.integer :workout_exercise_id
      t.integer :reps
      t.integer :lbs
      t.integer :duration
    end
  end
end
