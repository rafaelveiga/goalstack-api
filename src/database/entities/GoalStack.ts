import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GoalStack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  goalStackTitle: string;

  @Column()
  goalStackDescription: string;
}
