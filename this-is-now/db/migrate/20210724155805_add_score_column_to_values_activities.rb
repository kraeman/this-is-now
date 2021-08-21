class AddScoreColumnToValuesActivities < ActiveRecord::Migration[6.1]
  def change
    add_column :value_activities, :score, :integer
  end
end
