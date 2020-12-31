class CreateCardioExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :cardio_exercises do |t|
      t.integer :workout_id
      t.integer :distance
      t.integer :duration
    end
  end
end
