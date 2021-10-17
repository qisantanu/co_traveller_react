class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
