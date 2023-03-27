/*
 * Copyright 2021 - 2023 Energy Web Foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class InternalServerErrorResponseDto {
  @ApiProperty({ example: 500 })
  statusCode: 500;

  @ApiPropertyOptional({
    oneOf: [
      { type: 'string', example: 'error' },
      {
        type: 'array',
        items: { type: 'string' },
        example: ['error 1', 'error 2']
      }
    ]
  })
  message?: string | string[];

  @ApiProperty({ example: 'Internal Server Error' })
  error: 'Internal Server Error';
}