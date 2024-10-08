import { Attachment } from 'src/attachment/entity/attachment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { array: true })
  role: string[];

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @OneToMany((type) => Attachment, (attachment) => attachment?.user)
  attachment: Attachment;
}
