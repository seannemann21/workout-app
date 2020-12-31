class CreateStrengthExercise < ActiveRecord::Migration[6.0]
  def change
    create_table :strength_exercises do |t|
      t.integer :workout_id
      t.string :name
    end
  end
end
