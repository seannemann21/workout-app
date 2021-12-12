class CreateCardioSets < ActiveRecord::Migration[6.0]
  def change
    create_table :cardio_sets do |t|
      t.integer :workout_exercise_id
      t.integer :distance
      t.integer :duration

      t.timestamps
    end
  end
end
