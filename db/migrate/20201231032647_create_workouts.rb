class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.integer :user_id
      t.string :workout_type
      t.datetime :start_time
      t.boolean :completed
    end
  end
end
