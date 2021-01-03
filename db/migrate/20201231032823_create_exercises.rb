class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :workout_type
      t.boolean :cardio
    end
  end
end
